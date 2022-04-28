import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../model/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity, 'pg_main')
    private readonly repository: Repository<UserEntity>,
  ) {}

  async save(user: UserEntity): Promise<UserEntity> {
    return await this.repository.save(user).then((result) => {
      return result;
    });
  }

  findAll(): Promise<UserEntity[]> {
    return this.repository.find();
  }

  findById(id: number): Promise<UserEntity> {
    return this.repository.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    return await this.repository.delete(id).then((result) => {
      return result.affected > 0;
    });
  }
}
