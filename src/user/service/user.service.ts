import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { User } from '../model/user.interface';
import { UserUpdateDto } from '../model/dto/user.update.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async saveUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async getUserInfoById(id: number): Promise<User> {
    return this.userRepository.findById(id);
  }

  async getUserInfoByEmail(email: string): Promise<User> {
    return this.userRepository.findByEmail(email);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async updateUser(updateReq: UserUpdateDto): Promise<User> {
    const userToUpdate: User = await this.userRepository.findById(updateReq.id);

    return await this.userRepository.save(userToUpdate);
  }
}
