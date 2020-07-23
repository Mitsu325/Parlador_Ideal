import { getRepository } from 'typeorm';

import Post from '../model/Post';
import User from '../model/User';
import AppError from '../errors/AppError';

interface Request {
  id: string;
  user_id: string;
}

class DeletePostService {
  public async execute({ id, user_id }: Request): Promise<void> {
    const postsRepository = getRepository(Post);
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { id: user_id } });

    if (!user) {
      throw new AppError('Only authenticated users can delete post.', 401);
    }

    const post = await postsRepository.findOne({ where: { id } });

    if (!post) {
      throw new AppError('Post does not exist.');
    }

    await postsRepository.remove(post);
  }
}

export default DeletePostService;
