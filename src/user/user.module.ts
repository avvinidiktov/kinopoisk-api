import { Module } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { UserService } from './service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './model/entity/user.entity';
import { UserController } from './controller/user.controller';
import { UtilModule } from '../util/util.module';

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([UserEntity], 'pg_main'), UtilModule],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
