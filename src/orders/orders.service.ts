import { Injectable,NotFoundException } from '@nestjs/common';
import { Order } from './order.model';

@Injectable()
export class OrdersService {
    private orders:Order[]=[]
    insertOrder(title: string, desc: string, price: number) {
        const orderId = Math.random().toString();
        const newOrder = new Order(orderId, title, desc, price);
        this.orders.push(newOrder);
        return orderId;
      }
    
      getOrders() {
        return [...this.orders];
      }
    
      getSingleOrder(orderId: string) {
        const order = this.findOrder(orderId)[0];
        return { ...order };}

        updateOrder(orderId: string, title: string, desc: string, price: number) {
            const [order, index] = this.findOrder(orderId);
            const updatedOrder = { ...order};
            if (title) {
              updatedOrder.title = title;
            }
            if (desc) {
              updatedOrder.description = desc;
            }
            if (price) {
              updatedOrder.price = price;
            }
            this.orders[index] = updatedOrder;
          }
        
          deleteOrder(orderId: string) {
              const index = this.findOrder(orderId)[1];
              this.orders.splice(index, 1);
          }
          private findOrder(id: string): [Order, number] {
            const orderIndex = this.orders.findIndex(order => order.id === id);
            const order = this.orders[orderIndex];
            if (!order) {
              throw new NotFoundException('Could not find fragrance.');
            }
            return [order, orderIndex];
          }
          replaceOrder(orderId: string, title: string, desc: string, price: number)
           {
            const [order, index] = this.findOrder(orderId)
           const replacedOrder = {...order}
           replacedOrder.description=desc
           replacedOrder.price=price
           replacedOrder.title=title
           this.orders[index] = replacedOrder

          }


}
