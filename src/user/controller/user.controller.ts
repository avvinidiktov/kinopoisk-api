import { UserService } from '../service/user.service';
import { Controller, Get, Query } from '@nestjs/common';
import { UserInfoDto } from '../model/dto/user.info.dto';
import { UserMapper } from '../../util/mapper/user.mapper';
import { User } from '../model/user.interface';

@Controller('/user')
export class UserController {
  constructor(
    private userService: UserService,
    private userMapper: UserMapper,
  ) {}

  @Get('/get')
  async getUserById(@Query('id') id: number): Promise<UserInfoDto> {
    return this.userMapper.domainToDto(
      await this.userService.getUserInfoById(id),
    );
  }

  @Get('/get/all')
  async getAllUsers(): Promise<UserInfoDto[]> {
    const users: User[] = await this.userService.getAllUsers();
    return users.map((user) => this.userMapper.domainToDto(user));
  }
}
