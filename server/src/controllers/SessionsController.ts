import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import db from '../database/connection';

import authConfig from '../config/auth';

export default class SessionsController {
  async store(request: Request, response: Response) {
    const { email, password } = request.body;
    
    try {
      const user = await db('users').where('email', email).first();

      if (!user) return response.status(401).json({ error: 'User not found' });

      const checkPassword = await bcrypt.compare(password, user.password_hash);

      if (!checkPassword) return response.status(401).json({ error: 'Password does not match' });

      const { id, name, surname, avatar, whatsapp, bio } = user;

      const serializedUser = { id, name, surname, email, avatar, whatsapp, bio };

      const token = jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      });
      
      return response.json({ user: serializedUser, token });
    } catch (error) {
      console.log(error);
      
      return response.status(401).json({ error: 'Unexpected error while authenticated user' });
    }
  }
}