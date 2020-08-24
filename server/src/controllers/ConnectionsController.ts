import { Request, Response } from 'express';

import db from '../database/connection';

export default class ConnectionsController {
  async store(request: Request, response: Response) {
    const { user_id } = request.body;

    await db('connections')
      .insert({
        user_id,
      })
    ;

    return response.status(201).send();
  }
  
  async show(request: Request, response: Response) {
    const { total_connections } = await db('connections')
      .count('* as total_connections')
      .first()
    ;

    const { total_teachers } = await db('classes')
      .countDistinct('user_id as total_teachers')
      .first()
    ;

    return response.json({ total_connections, total_teachers });
  }
}