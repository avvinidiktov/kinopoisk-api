import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ReviewModule } from './review/review.module';
import { AuthModule } from './auth/auth.module';
import { UtilModule } from './util/util.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormModule } from './typeorm/typeorm.module';
import { TypeOrmConfigService } from './typeorm/config/typeorm.config.service';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/helper/env.helper';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      name: 'pg_main',
    }),
    UserModule,
    UtilModule,
    AuthModule,
    ReviewModule,
    TypeormModule,
  ],
})
export class AppModule {}
