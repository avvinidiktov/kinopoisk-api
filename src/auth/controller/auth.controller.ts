import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { RegisterRequest } from '../model/dto/register.request.dto';
import { UserInfoDto } from '../../user/model/dto/user.info.dto';
import { AuthRequest } from '../model/dto/base.user.auth.request.dto';
import { AuthResponseDto } from '../model/dto/auth.response.dto';
import { Builder } from 'builder-pattern';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(
    @Body() registerRequest: RegisterRequest,
  ): Promise<UserInfoDto> {
    return await this.authService.registerUser(registerRequest);
  }

  @Post('/auth')
  async auth(@Body() authRequest: AuthRequest): Promise<AuthResponseDto> {
    return Builder<AuthResponseDto>()
      .user(await this.authService.authenticateUser(authRequest))
      .jwt(null)
      .access(null)
      .build();
  }
}
