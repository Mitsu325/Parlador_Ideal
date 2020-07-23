import { Router } from 'express';
import usersRouter from './users.routes';
import postsRouter from './posts.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/posts', postsRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
