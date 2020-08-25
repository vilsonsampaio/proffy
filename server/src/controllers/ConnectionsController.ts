import { Request, Response } from 'express';

import db from '../database/connection';

export default class ConnectionsController {
  async store(request: Request, response: Response) {
    const { user_id } = request.body;

    try {
      await db('connections')
        .insert({
          user_id,
        })
      ;

      return response.status(201).send();
    } catch (error) {
      console.log(error);
      
      return response.status(401).json({ error: 'Unexpected error while adding new connection' });
    }
  }
  
  async show(request: Request, response: Response) {
    try {
      const { total_connections } = await db('connections')
        .count('* as total_connections')
        .first()
      ;
      
      return response.json({ total_connections });
    } catch (error) {
      console.log(error);
      
      return response.status(401).json({ error: 'Unexpected error while getting total of connections' });
    }
  }
}