import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/service/user.service';
import { RegisterRequest } from '../model/dto/register.request.dto';
import { UserDomain } from '../../user/model/domain/user.domain';
import { UserMapper } from '../../util/mapper/user.mapper';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private userMapper: UserMapper,
  ) {}

  async createUser(registerDto: RegisterRequest): Promise<UserDomain> {
    console.log(registerDto);
    return await this.userService.saveUser(
      this.userMapper.registerRequestToDomain(registerDto),
    );
  }
}
