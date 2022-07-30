import { Module } from '@nestjs/common';
import { FragranceService } from './fragrance.service';
import { FragranceController } from './fragrance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fragrance } from './fragrance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fragrance])],
  controllers: [FragranceController],
  providers: [FragranceService],
  exports:[TypeOrmModule]
})
export class FragranceModule {}
