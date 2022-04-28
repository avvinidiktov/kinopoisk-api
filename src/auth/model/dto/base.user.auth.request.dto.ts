import { BaseAuthUserDtoClass } from './base.user.dto.class';

export class AuthRequest extends BaseAuthUserDtoClass {
  rememberThisDevice: boolean;
}
