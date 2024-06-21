import { UserRepository } from '../../../interfaces/repositories/user';
import { User } from '../../entities/User';

export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(
    id: string,
    data: {
      name?: string;
      email?: string;
      password?: string;
    }
  ): Promise<User> {
    if (!this.userRepository.getById(id)) {
      throw new Error('User not found');
    }

    return this.userRepository.update(id, data);
  }
}
