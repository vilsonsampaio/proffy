import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import authConfig from '../config/auth';

export default async (request: Request, response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');
    
  try {
    const decode: any = await jwt.verify(token, authConfig.secret);
    
    request.userId = decode.id;
    
    return next();
  } catch (error) {
    console.log(error);

    return response.status(401).json({ error: 'Token invalid' })
  }
}