import { UserDomain } from '../../user/model/domain/user.domain';
import { UserDto } from '../../user/model/dto/user.dto';
import { Injectable } from '@nestjs/common';
import { Builder } from 'builder-pattern';
import { RegisterRequest } from '../../auth/model/dto/register.request.dto';

@Injectable()
export class UserMapper {
  registerRequestToDomain(registerRequest: RegisterRequest): UserDomain {
    return Builder<UserDomain>()
      ._username(registerRequest.username)
      ._birthdate(registerRequest.dateOfBirth)
      ._firstname(registerRequest.firstname)
      ._lastname(registerRequest.lastname)
      ._email(registerRequest.email)
      ._password(registerRequest.password)
      .build();
  }

  dtoToDomain(userDto: UserDto): UserDomain {
    return Builder<UserDomain>()
      ._id(userDto._id)
      ._email(userDto._email)
      ._password(userDto._password)
      ._username(userDto._username)
      .build();
  }

  domainToDto(user: UserDomain): UserDto {
    return Builder<UserDto>()
      ._id(user._id)
      ._username(user._username)
      ._firstname(user._firstname)
      ._lastname(user._lastname)
      ._birthdate(user._birthdate)
      ._email(user._email)
      ._lastDateUpdated(user._lastDateUpdated)
      ._createdDate(user._createdDate)
      .build();
  }
}
