import { Router } from 'express';
import { getRepository } from 'typeorm';

import Post from '../model/Post';
import CreateUserService from '../services/CreateUserService';
import ensureAuthenticated from '../middleware/ensureAuthenticated';

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    password,
  });

  delete user.password;

  return res.json(user);
});

usersRouter.get('/', ensureAuthenticated, async (req, res) => {
  const { id: user_id } = req.user;
  const postsRepository = getRepository(Post);
  const posts = await postsRepository.find({
    where: { user_id },
    select: ['id', 'text', 'updated_at'],
  });

  return res.json(posts);
});

export default usersRouter;
