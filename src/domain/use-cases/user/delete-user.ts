import { UserRepository } from '../../../interfaces/repositories/user';

export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string): Promise<void> {
    const userExists = await this.userRepository.getById(id);

    if (!userExists) {
      throw new Error('User not found');
    }

    return this.userRepository.delete(id);
  }
}
