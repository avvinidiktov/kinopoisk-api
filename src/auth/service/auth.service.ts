import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '@/user/service/user.service';
import { RegisterRequest } from '../model/dto/register.request.dto';
import { UserDomain } from '@/user/model/domain/user.domain';
import { UserMapper } from '@/util/mapper/user.mapper';
import * as bcrypt from 'bcrypt';
import { JwtProviderService } from '@/auth/service/jwt.provider.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private userMapper: UserMapper,
    private jwtService: JwtProviderService,
  ) {}

  async registerUser(registerDto: RegisterRequest): Promise<UserDomain> {
    console.log(registerDto);

    const user = this.userMapper.registerRequestToDomain(registerDto);

    return await this.userService.saveUser(user);
  }

  async authenticateUser(email: string, password: string): Promise<UserDomain> {
    return this.userService
      .getUserInfoByEmail(email)
      .catch(async (err) => {
        console.log(err);
        throw new UnauthorizedException('User not found');
      })
      .then(async (user) => {
        if (await bcrypt.compare(password, user._password)) {
          return user;
        } else {
          throw new UnauthorizedException('Passwords did not match');
        }
      });
  }

  async provideTokenPair(
    email: string,
    rememberUserFlag: boolean,
  ): Promise<TokenPairDto> {
    return this.jwtService.signUser(email, 'sdf', rememberUserFlag);
  }
}
