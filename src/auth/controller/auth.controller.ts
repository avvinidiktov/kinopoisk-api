import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { RegisterRequest } from '../model/dto/register.request.dto';
import { UserDto } from '../../user/model/dto/user.dto';
import { UserMapper } from '../../util/mapper/user.mapper';

@Controller('/auth')
export class AuthController {
  private;

  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(
    @Body(ValidationPipe) registerRequest: RegisterRequest,
  ): Promise<UserDto> {
    return await this.authService.createUser(registerRequest);
  }
}
