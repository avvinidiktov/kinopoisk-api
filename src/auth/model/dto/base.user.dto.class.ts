import { AuthRequestInterface } from '../auth.request.interface';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class BaseAuthUserDtoClass implements AuthRequestInterface {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(10)
  password: string;
}
