import { BaseAuthUserDtoClass } from './base.user.dto.class';
import { IsNotEmpty } from 'class-validator';

export class RegisterRequest extends BaseAuthUserDtoClass {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  firstname: string;
  @IsNotEmpty()
  lastname: string;
  @IsNotEmpty()
  dateOfBirth: Date;
  @IsNotEmpty()
  region: string;
}
