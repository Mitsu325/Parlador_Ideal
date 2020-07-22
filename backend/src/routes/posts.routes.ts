import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreatePostService from '../services/CreatePostService';
import Post from '../model/Post';

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

export default postsRouter;
