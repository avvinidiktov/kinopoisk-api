import { Module } from '@nestjs/common';
import { TypeOrmConfigService } from './config/typeorm.config.service';
import { UtilModule } from '@/util/util.module';

@Module({
  imports: [UtilModule],
  providers: [TypeOrmConfigService],
})
export class TypeormModule {}
