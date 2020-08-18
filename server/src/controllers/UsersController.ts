import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

import db from '../database/connection';

export default class UsersController {
  async store(request: Request, response: Response) {
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
        password_hash,
      });
      
      return response.status(201).send();
    } catch (error) {
      console.log(error);
      
      return response.status(400).json({
        error: 'Unexpected error while creating new user'
      });
    }
  }

  async show(request: Request, response: Response) {
    const { userId } = request;
    
    try {
      const user = await db('users').where('id', userId).first();

      if (!user) return response.status(401).json({ error: 'User not found' });

      const { id, name, surname, email, avatar, whatsapp, bio } = user;

      const serializedUser = { id, name, surname, email, avatar, whatsapp, bio };

      return response.json(serializedUser);
    } catch (error) {
      console.log(error);
      
      return response.status(401).json({ error: 'Unexpected error while get user info' });
    }
  }
}