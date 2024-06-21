import { CreateProductDTO, ProductRepository } from '../../../interfaces/repositories/product';
import { Product } from '../../entities/Product';

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({ name, price, stock }: CreateProductDTO): Promise<Product> {
    return this.productRepository.create({
      name,
      price,
      stock,
    });
  }
}
