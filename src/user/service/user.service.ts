import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { User } from '../model/user.interface';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async saveUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async getUserInfo(id: number): Promise<User> {
    return this.userRepository.findById(id);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
