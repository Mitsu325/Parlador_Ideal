import { Router } from 'express';
import { getRepository } from 'typeorm';

import Post from '../model/Post';
import CreatePostService from '../services/CreatePostService';
import UpdatePostService from '../services/UpdatePostService';

const postsRouter = Router();

postsRouter.get('/', async (req, res) => {
  const postsRepository = getRepository(Post);
  const posts = await postsRepository.find({
    select: ['text', 'updated_at'],
    relations: ['user'],
  });

  return res.json(posts);
});

postsRouter.post('/', async (req, res) => {
  const { text, user_id } = req.body;
  const createPost = new CreatePostService();
  const post = await createPost.execute({
    text,
    user_id,
  });

  return res.json(post);
});

postsRouter.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { text, user_id } = req.body;

  const updatePost = new UpdatePostService();
  const post = await updatePost.execute({
    id,
    text,
    user_id,
  });

  return res.json(post);
});

export default postsRouter;
