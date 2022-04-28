import { Module } from '@nestjs/common';
import { UserMapper } from './mapper/user.mapper';

@Module({
  imports: [],
  exports: [UserMapper],
  providers: [UserMapper],
})
export class UtilModule {}
