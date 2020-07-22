import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../model/User';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    if (!name || !email || !password) {
      throw new AppError('Missing information to register user.');
    }

    // Verificando se o email está em uso
    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    // Tratamento do erro
    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    // Criptografando password
    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
