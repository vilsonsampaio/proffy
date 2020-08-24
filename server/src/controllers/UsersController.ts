import { Request, Response } from 'express';

import db from '../database/connection';

import { ScheduleItem } from './ClassesController';

import convertHourToMinutes from '../utils/convertHoursToMinutes';

export default class UsersController {
  async show(request: Request, response: Response) {
    const { userId } = request;
    
    const trx = await db.transaction();

    try {
      const user = await trx('classes')
        .join('users', 'classes.user_id', '=', userId)
        .select(['classes.*', 'users.id', 'users.name','users.surname', 'users.email', 'users.avatar', 'users.bio', 'users.whatsapp'])
        .first()
      ;

      if (!user) return response.status(401).json({ error: 'User not found' });

      const schedule = await trx('class_schedule')
        .where('class_id', '=', user.id)
        .select(['id', 'week_day', 'from', 'to'])
      ;

      if (!schedule) return response.status(401).json({ error: 'Schedule not found' });

      const serializedUser = { ...user, schedule }
      
      await trx.commit();

      return response.json(serializedUser);
    } catch (error) {
      console.log(error);
      
      await trx.rollback();

      return response.status(401).json({ error: 'Unexpected error while get user infos' });
    }
  }

  async update(request: Request, response: Response) {
    const { userId } = request;

    const { 
      name, 
      surname, 
      email, 
      bio, 
      whatsapp,
      subject,
      cost, 
      schedule
    } = request.body;
    const avatar = request.file.filename;

    const trx = await db.transaction();

    try {
      const fileType = request.file.mimetype.split('/')[1];
      
      if (fileType !== 'png' && fileType !== 'jpg' && fileType !== 'jpeg') {
        return response.status(400).json({ error: 'Only images are allowed' });
      }
      
      await trx('users')
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

      const class_id_deleted = await trx('classes')
        .where('user_id', userId)
        .del()
      ;

      await trx('class_schedule')
        .where('class_id', class_id_deleted)
        .del()
      ;
      

      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id: userId,
      });

      const class_id_inserted = insertedClassesIds[0];

      const classSchedule = JSON.parse(schedule).map((scheduleItem: ScheduleItem) => {
        return {
          week_day: scheduleItem.week_day, 
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
          class_id: class_id_inserted
        }
      });

      const serializedUser = {
        userId,
        name,
        surname,
        email,
        avatar: `http://localhost:3333/uploads/${avatar}`,
        bio,
        whatsapp,
        subject,
        cost,
        schedule: classSchedule
      }; 

      await trx.commit();

      return response.json(serializedUser);
    } catch (error) {
      console.log(error);

      await trx.rollback();
      
      return response.status(401).json({ error: 'Unexpected error while update user' });
    }
  }
}