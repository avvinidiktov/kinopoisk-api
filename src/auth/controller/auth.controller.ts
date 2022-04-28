import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { RegisterRequest } from '../model/dto/register.request.dto';
import { UserInfoDto } from '../../user/model/dto/user.info.dto';
import { AuthRequest } from '../model/dto/base.user.auth.request.dto';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(
    @Body(ValidationPipe) registerRequest: RegisterRequest,
  ): Promise<UserInfoDto> {
    return await this.authService.registerUser(registerRequest);
  }

  @Post('/auth')
  async auth(
    @Body(ValidationPipe) authRequest: AuthRequest,
  ): Promise<UserInfoDto> {
    return await this.authService.authenticateUser(authRequest);
  }
}
