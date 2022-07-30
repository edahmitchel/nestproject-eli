import { type } from 'os';
// import { Order } from 'src/orders/order.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('fragrance')
export class Fragrance {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  stock: number;

  @Column()
  size: number;

  @Column()
  price: number;

  @Column({ default: true })
  discount: boolean;


  // @OneToMany(type => Order, order => order.id)
  // orders:Order[];
}