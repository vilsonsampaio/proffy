import express from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import authMiddleware from './middleware/auth';

import UsersController from './controllers/UsersController';
import SessionsController from './controllers/SessionsController';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const upload = multer(multerConfig);

const usersControllers = new UsersController();
const sessionsController = new SessionsController();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/sign_in', sessionsController.signIn);
routes.post('/sign_up', sessionsController.signUp);
routes.post('/forgot_password', sessionsController.forgotPassword);
routes.post('/reset_password', sessionsController.resetPassword);

// Privando as rotas abaixo, possibilitando acesso apenas com um token
routes.use(authMiddleware);

routes.get('/check-token', (req, res) => res.json({ ok: true }));

routes.get('/users', usersControllers.show);
routes.put('/users', upload.single('avatar'), usersControllers.update);


routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.store);

routes.get('/connections', connectionsController.show);
routes.post('/connections', connectionsController.store);

export default routes;