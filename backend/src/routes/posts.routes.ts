import { Router } from 'express';
import { getRepository } from 'typeorm';

import Post from '../model/Post';
import CreatePostService from '../services/CreatePostService';
import UpdatePostService from '../services/UpdatePostService';
import DeletePostService from '../services/DeletePostService';
import ensureAuthenticated from '../middleware/ensureAuthenticated';

const postsRouter = Router();

postsRouter.use(ensureAuthenticated);

postsRouter.get('/', async (req, res) => {
  const postsRepository = getRepository(Post);
  const posts = await postsRepository.find({
    select: ['text', 'updated_at'],
    relations: ['user'],
  });

  return res.json(posts);
});

postsRouter.post('/', async (req, res) => {
  const { text } = req.body;
  const createPost = new CreatePostService();
  const post = await createPost.execute({
    text,
    user_id: req.user.id,
  });

  return res.json(post);
});

postsRouter.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  const updatePost = new UpdatePostService();
  const post = await updatePost.execute({
    id,
    text,
    user_id: req.user.id,
  });

  return res.json(post);
});

postsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const deletePost = new DeletePostService();

  await deletePost.execute({
    id,
    user_id: req.user.id,
  });

  return res.status(204).send();
});

export default postsRouter;
