import { Request, Response } from 'express';

import db from '../database/connection';

import { ScheduleItem } from './ClassesController';

import convertHourToMinutes from '../utils/convertHoursToMinutes';

export default class UsersController {
  async show(request: Request, response: Response) {
    const { userId } = request;
    console.log(userId)
    
    const trx = await db.transaction();

    try {
      const user = await trx('users')
        .where('id', userId)
        .select(['id', 'name','surname', 'email', 'avatar', 'bio', 'whatsapp'])
        .first()
      ;

      if (!user) return response.status(401).json({ error: 'User not found' });

      const classes = await trx('classes')
        .where('user_id', userId)
        .first()
      ;


      const schedule = await trx('class_schedule')
        .where('class_id', classes.id)
        .select(['id', 'week_day', 'from', 'to'])
      ;

      if (!schedule) return response.status(401).json({ error: 'Schedule not found' });

      const serializedUser = { 
        ...user, 
        ...classes,
        avatar: user.avatar ? `http://localhost:3333/uploads/${user.avatar}` : null,
        schedule,
      };
      
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

      
      const { id: class_id_deleted } = await trx('classes')
        .where('user_id', userId)
        .select('id')
        .first()
      ;
      
      await trx('classes')
        .where('id', class_id_deleted)
        .del()
      ;
      
      await trx('class_schedule')
        .where('class_id', class_id_deleted)
        .del()
      ;

      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost: Number(cost),
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

      await trx('class_schedule').insert(classSchedule);

      const serializedUser = {
        userId,
        name,
        surname,
        email,
        avatar: avatar ? `http://localhost:3333/uploads/${avatar}` : null,
        bio,
        whatsapp,
        subject,
        cost: Number(cost),
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