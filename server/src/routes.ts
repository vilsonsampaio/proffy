import express from 'express';

import authMiddleware from './middleware/auth';

import UsersController from './controllers/UsersController';
import SessionsController from './controllers/SessionsController';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();

const usersControllers = new UsersController();
const sessionsController = new SessionsController();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/users', usersControllers.store);
routes.post('/sessions', sessionsController.store);


routes.use(authMiddleware);


routes.get('/check-token', (req, res) => res.json({ ok: true }));

routes.get('/users', usersControllers.show);

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.store);

routes.get('/connections', connectionsController.show);
routes.post('/connections', connectionsController.store);

export default routes;