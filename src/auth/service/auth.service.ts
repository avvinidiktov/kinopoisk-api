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
    user._password = await this.encryptPassword(user._password);

    return await this.userService.saveUser(user);
  }

  async authenticateUser(authRequest: AuthRequest): Promise<UserDomain> {
    if (await this.compareCredentials(authRequest))
      return await this.userService.getUserInfoByEmail(authRequest.email);
  }

  async encryptPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, await bcrypt.genSalt());
  }

  async compareCredentials(authRequest: AuthRequest): Promise<boolean> {
    return this.userService
      .getUserInfoByEmail(authRequest.email)
      .then(async (result) => {
        return await bcrypt.compare(authRequest.password, result._password);
      });
  }
}
