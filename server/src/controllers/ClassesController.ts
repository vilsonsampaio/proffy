import { Request, Response } from 'express';

import db from '../database/connection';

import convertHourToMinutes from '../utils/convertHoursToMinutes';
import paginate from '../utils/paginate';


interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  async store(request: Request, response: Response) {
    const { userId } = request;


    const { subject, cost, schedule } = request.body;

    const trx = await db.transaction();

    try {
      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id: userId,
      });
    
      const class_id = insertedClassesIds[0];
    
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          week_day: scheduleItem.week_day, 
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
          class_id
        }
      });
    
      await trx('class_schedule').insert(classSchedule);
    
      await trx.commit();
      
      return response.status(201).send();
    } catch (error) {
      console.log(error);
      
      await trx.rollback();

      return response.status(400).json({
        error: 'Unexpected error while creating new class'
      });
    }
  }
  
  async index(request: Request, response: Response) {
    const filters = request.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;
    const page = Number(filters.page as string) || 1;

    const trx = await db.transaction();

    try {
      let classes;

      if (!week_day || !subject || !time) {
        classes = await trx('classes')
          .join('users', 'classes.user_id', '=', 'users.id')
          .select(['classes.*', 'users.id', 'users.name','users.surname', 'users.avatar', 'users.bio', 'users.whatsapp'])
        ;
      } else {
        const timeinMinutes = convertHourToMinutes(time);
    
        classes = await trx('classes')
          .whereExists(function() {
            this.select('class_schedule.*')
              .from('class_schedule')
              .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
              .whereRaw('`class_schedule`.`week_day` == ??', [Number(week_day)])
              .whereRaw('`class_schedule`.`from` <= ??', [timeinMinutes])
              .whereRaw('`class_schedule`.`to` > ??', [timeinMinutes])
            ;
          })
          .where('classes.subject', '=', subject)
          .join('users', 'classes.user_id', '=', 'users.id')
          .select(['classes.*', 'users.id', 'users.name','users.surname', 'users.avatar', 'users.bio', 'users.whatsapp'])
        ;
      }

      const includingSchedule = classes.map(async (item) => {
        const class_schedule = await trx('class_schedule')
          .where('class_id', '=', item.id)
          .select(['id', 'week_day', 'from', 'to'])
        ;

        return { 
          ...item, 
          class_schedule,
        };
      });

      const serializedClass = paginate(await Promise.all(includingSchedule), page);

      await trx.commit();

      return response.json(serializedClass);
    } catch (error) {
      console.log(error);
      
      await trx.rollback();

      return response.status(400).json({
        error: 'Unexpected error while searching for classes'
      });
    }
  }
}