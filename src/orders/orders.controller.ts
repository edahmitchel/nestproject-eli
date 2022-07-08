import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Get("all")
  getAll() {
    return this.ordersService.getOrders()
  }
  @Get(':id')
  getOrder(@Param('id') orderId: string) {
    return this.ordersService.getSingleOrder(orderId);
  }

  @Post()
  addOrder(
    @Body('title') orderTitle: string,
    @Body('description') orderDesc: string,
    @Body('price') orderPrice: number,
  ) {
    const generatedId = this.ordersService.insertOrder(
      orderTitle,
      orderDesc,
      orderPrice,
    );
    return { id: generatedId };
  }
@Put(':id')
replaceOrder(   @Param('id') orderId: string,
@Body('title') orderTitle: string,
@Body('description') orderDesc: string,
@Body('price') orderPrice: number,){
  return this.ordersService.replaceOrder(orderId,orderTitle,orderDesc,orderPrice)

}

  @Patch(':id')
  updateOrder(
    @Param('id') orderId: string,
    @Body('title') orderTitle: string,
    @Body('description') orderDesc: string,
    @Body('price') orderPrice: number,
  ) {
    this.ordersService.updateOrder(orderId, orderTitle, orderDesc, orderPrice);
    return null;
  }

  @Delete(':id')
  removeOrder(@Param('id') orderId: string) {
    this.ordersService.deleteOrder(orderId);
    return null;
  }



}
