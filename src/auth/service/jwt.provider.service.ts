import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Builder } from 'builder-pattern';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtProviderService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  async signUser(
    email: string,
    claim: string,
    isRememberMe: boolean,
  ): Promise<TokenPairDto> {
    const jwt: string = await this.jwtService.signAsync(
      {
        email: email,
        claim: claim,
      },
      {
        expiresIn: this.config.get<string>('JWT_EXPIRES'),
        secret: this.config.get('JWT_SECRET'),
      },
    );
    const refresh: string = await this.jwtService.signAsync(
      {
        email: email,
        claim: claim,
      },
      {
        expiresIn: this.config.get<string>(
          isRememberMe ? 'REFRESH_EXPIRES_REMEMBER_ME' : 'REFRESH_EXPIRES',
        ),
        secret: this.config.get('REFRESH_SECRET'),
      },
    );

    return this.storeSession(
      Builder<TokenPairDto>().jwt(jwt).refresh(refresh).build(),
    );
  }

  private storeSession(tokenPairDto: TokenPairDto) {
    return tokenPairDto;
  }

  async verify(token: string) {
    return this.jwtService.verifyAsync(token);
  }

  async verifyRefreshToken(refreshToken: string): Promise<boolean> {
    return true;
  }

  async extendJwtLifePeriod(jwt: string): Promise<string> {
    return jwt;
  }
}
