import { getRepository } from 'typeorm';

import Post from '../model/Post';
import AppError from '../errors/AppError';

class DeletePostService {
  public async execute(id: string): Promise<void> {
    const postsRepository = getRepository(Post);

    const post = await postsRepository.findOne(id);

    if (!post) {
      throw new AppError('Post does not exist.');
    }

    await postsRepository.remove(post);
  }
}

export default DeletePostService;
