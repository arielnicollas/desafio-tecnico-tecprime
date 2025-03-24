import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async create(orderData: Partial<Order>): Promise<Order> {
    const order = this.orderRepository.create(orderData);
    return this.orderRepository.save(order);
  }
}