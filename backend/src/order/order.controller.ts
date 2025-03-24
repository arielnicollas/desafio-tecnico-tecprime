import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() orderData: Partial<Order>): Promise<Order> {
    return this.orderService.create(orderData);
  }
}