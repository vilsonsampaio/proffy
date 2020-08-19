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

  async update(request: Request, response: Response) {
    const { userId } = request;

    const { name, surname, email, bio, whatsapp } = request.body;
    const avatar = request.file.filename;

    
    
    try {
      const fileType = request.file.mimetype.split('/')[1];
      
      if (fileType !== 'png' && fileType !== 'jpg' && fileType !== 'jpeg') {
        return response.status(400).json({ error: 'Only images are allowed' });
      }
      
      await db('users')
        .where('id', userId)
        .update({
          name,
          surname,
          email,
          avatar,
          bio,
          whatsapp,
        })
      ;

      const serializedUser = {
        userId,
        name,
        surname,
        email,
        avatar: `http://localhost:3333/uploads/${avatar}`,
        bio,
        whatsapp,
      }; 

      return response.json(serializedUser);

    } catch (error) {
      console.log(error);
      
      return response.status(401).json({ error: 'Unexpected error while update user' });
    }
  }
}