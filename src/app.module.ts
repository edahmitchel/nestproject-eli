import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FragranceModule } from './fragrance/fragrance.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [FragranceModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
