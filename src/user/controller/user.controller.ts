import { UserService } from '../service/user.service';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserDto } from '../model/dto/user.dto';
import { UserMapper } from '../../util/mapper/user.mapper';
import { User } from '../model/user.interface';

@Controller('/user')
export class UserController {
  constructor(
    private userService: UserService,
    private userMapper: UserMapper,
  ) {}

  @Get('/get')
  async getUserById(@Query('id') id: number): Promise<UserDto> {
    return this.userMapper.domainToDto(await this.userService.getUserInfo(id));
  }

  @Get('/get/all')
  async getAllUsers(): Promise<UserDto[]> {
    const users: User[] = await this.userService.getAllUsers();
    return users.map((user) => this.userMapper.domainToDto(user));
  }
}
