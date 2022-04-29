import { UserDomain } from '../../user/model/domain/user.domain';
import { UserInfoDto } from '../../user/model/dto/user.info.dto';
import { Injectable } from '@nestjs/common';
import { Builder } from 'builder-pattern';
import { RegisterRequest } from '../../auth/model/dto/register.request.dto';
import { UserEntity } from '../../user/model/entity/user.entity';

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

  dtoToDomain(userDto: UserInfoDto): UserDomain {
    return Builder<UserDomain>()
      ._id(userDto._id)
      ._email(userDto._email)
      ._password(userDto._password)
      ._username(userDto._username)
      .build();
  }

  domainToDto(user: UserDomain): UserInfoDto {
    return Builder<UserInfoDto>()
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

  domainToEntity(user: UserDomain): UserEntity {
    return Builder<UserEntity>()
      ._username(user._username)
      ._password(user._password)
      ._birthdate(user._birthdate)
      ._firstname(user._firstname)
      ._lastname(user._lastname)
      ._email(user._email)
      .build();
  }
}
