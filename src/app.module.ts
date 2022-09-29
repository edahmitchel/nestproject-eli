import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FragranceModule } from './fragrance/fragrance.module';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fragrance } from './fragrance/fragrance.entity';
import { DataSource } from 'typeorm';

import { ProductsModule } from './products/products.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'containers-us-west-40.railway.app',
      port: 7482,
      username: 'root',
      password: 'icmpfLZb2pUNgJvMfa5B',
      database: 'railway',
      autoLoadEntities:true,
      // entities: [Fragrance],
      synchronize: true,
    }),FragranceModule, OrdersModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource:DataSource){}
}
