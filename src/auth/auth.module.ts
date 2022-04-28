import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { UserModule } from '../user/user.module';
import { UtilModule } from '../util/util.module';

@Module({
  imports: [UserModule, UtilModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
