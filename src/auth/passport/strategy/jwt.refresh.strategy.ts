import { PassportStrategy } from '@nestjs/passport';
import { JwtProviderService } from '@/auth/service/jwt.provider.service';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    private configService: ConfigService,
    private jwtService: JwtProviderService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('RT_SECRET'),
      passReqToCallback: true,
    });
  }

  async validate(req: Request) {
    const jwt: string = req?.get('authorization')?.replace('Bearer', '').trim();

    const refreshToken: string = req
      ?.get('refresh')
      ?.replace('Bearer', '')
      .trim();

    if (refreshToken && jwt) {
      if (await this.jwtService.verifyRefreshToken(refreshToken)) {
        await this.jwtService.extendJwtLifePeriod(jwt);
      }
    }
  }
}
