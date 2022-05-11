import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/service/user.service';
import { RegisterRequest } from '../model/dto/register.request.dto';
import { UserDomain } from '../../user/model/domain/user.domain';
import { UserMapper } from '../../util/mapper/user.mapper';
import * as bcrypt from 'bcrypt';
import { AuthRequest } from '../model/dto/base.user.auth.request.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private userMapper: UserMapper,
  ) {}

  async registerUser(registerDto: RegisterRequest): Promise<UserDomain> {
    console.log(registerDto);

    const user = this.userMapper.registerRequestToDomain(registerDto);

    return await this.userService.saveUser(user);
  }

  async authenticateUser(authRequest: AuthRequest): Promise<UserDomain> {
    return this.userService
      .getUserInfoByEmail(authRequest.email)
      .catch(async (err) => {
        console.log(err);
        throw new Error('Email not found');
      })
      .then(async (user) => {
        if (await bcrypt.compare(authRequest.password, user._password)) {
          return user;
        } else {
          throw new Error('Passwords did not match');
        }
      });
  }
}
