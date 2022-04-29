import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { User } from '../model/user.interface';
import { UserUpdateDto } from '../model/dto/user.update.dto';
import { UserDomain } from '../model/domain/user.domain';
import { UserMapper } from '../../util/mapper/user.mapper';

@Injectable()
export class UserService {
  constructor(
    private userMapper: UserMapper,
    private userRepository: UserRepository,
  ) {}

  async saveUser(user: UserDomain): Promise<User> {
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
    const userToUpdate = await this.userRepository.findById(updateReq.id);

    return await this.userRepository.save(userToUpdate);
  }
}
