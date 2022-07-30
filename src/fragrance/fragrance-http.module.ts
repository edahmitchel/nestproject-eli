
import { Module } from '@nestjs/common';
import { FragranceModule } from './fragrance.module';
import { FragranceService } from './fragrance.service';
import { FragranceController } from './fragrance.controller';

@Module({
  imports: [FragranceModule],
  providers: [FragranceService],
  controllers: [FragranceController]
})
export class FragranceHttpModule {}
