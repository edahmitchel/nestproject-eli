import { Module } from '@nestjs/common';
import { FragranceService } from './fragrance.service';
import { FragranceController } from './fragrance.controller';

@Module({
  controllers: [FragranceController],
  providers: [FragranceService]
})
export class FragranceModule {}
