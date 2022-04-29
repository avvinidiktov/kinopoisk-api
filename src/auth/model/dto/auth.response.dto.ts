import { UserInfoDto } from '../../../user/model/dto/user.info.dto';

export class AuthResponseDto {
  user: UserInfoDto;
  jwt: string;
  access: string;
}
