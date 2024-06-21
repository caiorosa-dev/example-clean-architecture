import IdDataObject from '../../../domain/data-object/IdDataObject';
import { User } from '../../../domain/entities/User';
import { UserRepository, CreateUserDTO, UpdateUserDTO } from '../../../interfaces/repositories/user';

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async getByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) || null;
  }

  async getById(id: string): Promise<User | null> {
    return this.users.find((user) => user.id === id) || null;
  }

  async getAll(): Promise<User[]> {
    return this.users;
  }

  async create(userDto: CreateUserDTO): Promise<User> {
    const newUser: User = {
      id: IdDataObject.generate(),
      name: userDto.name,
      email: userDto.email,
      password: userDto.password,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(newUser);

    return newUser;
  }

  async update(id: string, userDto: UpdateUserDTO): Promise<User> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      const user = this.users[userIndex];
      this.users[userIndex] = {
        ...user,
        name: userDto.name || user.name,
        email: userDto.email || user.email,
        password: userDto.password || user.password,
        updatedAt: new Date(),
      };
    }

    return this.users[userIndex];
  }

  async delete(id: string): Promise<void> {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
