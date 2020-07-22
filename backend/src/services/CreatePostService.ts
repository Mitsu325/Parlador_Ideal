import { getRepository } from 'typeorm';

import Post from '../model/Post';
import User from '../model/User';
import AppError from '../errors/AppError';

interface Request {
  text: string;
  user_id: string;
}

class CreatePostService {
  public async execute({ text, user_id }: Request): Promise<Post> {
    const postsRepository = getRepository(Post);
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    if (!text.trim() || text.length > 280) {
      throw new AppError('Text invalid.');
    }

    const post = postsRepository.create({
      text,
      user_id,
    });

    await postsRepository.save(post);

    return post;
  }
}

export default CreatePostService;
