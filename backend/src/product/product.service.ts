import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import axios from 'axios';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async populateProducts() {
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data.map((item) => ({
      name: item.title,
      description: item.description,
      price: item.price,
      stock: Math.floor(Math.random() * 100) + 1,
      image: item.image,
      category: item.category,
    }));
    await this.productRepository.save(products);
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }
}