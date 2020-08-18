import { Request, Response } from 'express';

import db from '../database/connection';

export default class UsersController {
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
      
      return response.status(401).json({ error: 'Unexpected error while get user' });
    }
  }
}