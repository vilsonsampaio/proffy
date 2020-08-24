import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

import db from '../database/connection';

import authConfig from '../config/auth';
import mailConfig from '../config/mail';

import mailer from '../modules/mailer';

export default class SessionsController {
  async signUp(request: Request, response: Response) {
    const {
      name,
      surname,
      email,
      password,
    } = request.body;

    try {
      const userExists = await db('users').where('email', email).first();

      if (userExists) return response.status(400).json({ error: 'User already exists' });

      const password_hash = await bcrypt.hash(password, 10);

      await db('users').insert({
        name,
        surname,
        email,
        password: password_hash,
      });
      
      return response.status(201).send();
    } catch (error) {
      console.log(error);
      
      return response.status(400).json({
        error: 'Unexpected error while creating new user'
      });
    }
  }

  async signIn(request: Request, response: Response) {
    const { email, password } = request.body;
    
    try {
      const user = await db('users')
        .where('email', email)
        .first()
      ;

      if (!user) return response.status(401).json({ error: 'User not found' });

      const checkPassword = await bcrypt.compare(password, user.password);

      if (!checkPassword) return response.status(401).json({ error: 'Password does not match' });

      const { id, name, surname, avatar, whatsapp, bio } = user;

      const serializedUser = { 
        id, 
        name, 
        surname, 
        email, 
        avatar: avatar ? `http://localhost:3333/uploads/${avatar}` : null, 
        whatsapp, 
        bio 
      };

      const token = jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      });
      
      return response.json({ user: serializedUser, token });
    } catch (error) {
      console.log(error);
      
      return response.status(401).json({ error: 'Unexpected error while authenticated user' });
    }
  }

  async forgotPassword(request: Request, response: Response) {
    const { email } = request.body;
    
    try {
      const user = await db('users')
        .where('email', email)
        .select('id')
        .first()
      ;

      if (!user) return response.status(401).json({ error: 'User not found' });

      const token = crypto.randomBytes(20).toString('hex');

      const now = new Date();
      now.setHours(now.getHours() + 1);

      await db('users')
        .where('id', user.id)
        .update(
          {
            password_reset_token: token,
            password_reset_expires: now,
          }
        )
      ;

      mailer.sendMail(
        {
          to: email,
          from: 'contato.vilsonsampaio@gmail.com',
          html: `<p>Você esqueceu sua senha? Não tem problema, <a href='${mailConfig.resetPasswordPageURL}?token=${token}&id=${user.id}'>clique aqui</a> para recuperar ou cole esse endereço em seu navegador ${mailConfig.resetPasswordPageURL}?token=${token}&id=${user.id}</p>`,
        },
        (error) => {
          if (error) return response.status(400).json({ error: 'Cannot send forgot password email' });

          return response.status(200).send();
        } 
      );

      return response.status(200).send();
    } catch (error) {
      console.log(error);
      
      return response.status(401).json({ error: 'Unexpected error on forgot password, try again authenticated user' });
    }
  }

  async resetPassword(request: Request, response: Response) {
    const { id, token, password } = request.body;
    
    try {
      const user = await db('users')
        .where('id', id)
        .select('password_reset_token', 'password_reset_expires')
        .first()
      ;

      if (!user) {
        return response.status(401).json({ error: 'User not found' });
      }

      if (token !== user.password_reset_token) {
        return response.status(401).json({ error: 'Token invalid' });
      }

      const now = new Date();
      if (now > user.password_reset_expires) {
        return response.status(401).json({ error: 'Token expired, generate a new one' });
      }

      const password_hash = await bcrypt.hash(password, 10);

      await db('users')
        .where('id', id)
        .update(
          {
            password: password_hash,
            password_reset_expires: now,
          }
        )
      ;

      return response.status(200).send();
    } catch (error) {
      console.log(error);
      
      return response.status(400).json({ error: 'Unexpected error on forgot password, try again authenticated user' });
    }
  }
}