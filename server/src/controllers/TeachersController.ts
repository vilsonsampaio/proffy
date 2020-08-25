import { Request, Response } from 'express';

import db from '../database/connection';

export default class TeachersController {
  async show(request: Request, response: Response) {
    try {
      const { total_teachers } = await db('classes')
        .countDistinct('user_id as total_teachers')
        .first()
      ;

      return response.json({ total_teachers });
    } catch (error) {
      console.log(error);
      
      return response.status(401).json({ error: 'Unexpected error while getting the total of teachers' });
    }
  }
  
  async check(request: Request, response: Response) {
    const { userId } = request;

    try {
      const checkTeacher = await db('classes')
        .where('user_id', userId)
        .first()
      ;

      if (!checkTeacher) return response.json({ have_classes: false });

      return response.json({ have_classes: true });
    } catch(error) {
      console.log(error);

      return response.status(401).json({ error: 'Unexpected error while checking if the user is already a teacher.' });
    }
  }
}