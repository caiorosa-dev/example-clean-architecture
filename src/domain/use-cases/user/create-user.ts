import { CreateUserDTO, UserRepository } from '../../../interfaces/repositories/user';
import { User } from '../../entities/User';

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ name, email, password }: CreateUserDTO): Promise<User> {
    const existUser = await this.userRepository.getByEmail(email);

    if (existUser) {
      throw new Error('User already exists');
    }

    return this.userRepository.create({
      email,
      name,
      password,
    });
  }
}
