import { getRepository } from 'typeorm';

import Post from '../model/Post';
import User from '../model/User';
import AppError from '../errors/AppError';

interface Request {
  id: string;
  text: string;
  user_id: string;
}

class UpdatePostService {
  public async execute({ id, text, user_id }: Request): Promise<Post> {
    const postsRepository = getRepository(Post);
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { id: user_id } });

    if (!user) {
      throw new AppError('Only authenticated users can post.', 401);
    }

    const post = await postsRepository.findOne({ where: { id } });

    if (!post) {
      throw new AppError('There is no post.');
    }

    if (!text.trim() || text.length > 280) {
      throw new AppError('Text invalid.');
    }

    post.text = text;

    await postsRepository.save(post);

    return post;
  }
}

export default UpdatePostService;
