import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { UserModule } from '@/user/user.module';
import { UtilModule } from '@/util/util.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtProviderService } from '@/auth/service/jwt.provider.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: '2LUP=TFL48t@8gmVv*)n',
      }),
    }),
    UserModule,
    UtilModule,
  ],
  providers: [AuthService, JwtProviderService],
  controllers: [AuthController],
})
export class AuthModule {}
