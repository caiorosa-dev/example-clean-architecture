import { ProductRepository } from '../../../interfaces/repositories/product';
import { UpdateProductDTO } from '../../../interfaces/repositories/product';
import { Product } from '../../entities/Product';

export class UpdateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(productId: string, productData: UpdateProductDTO): Promise<Product> {
    const product = await this.productRepository.getById(productId);

    if (!product) {
      throw new Error('Product not found');
    }

    return this.productRepository.update(productId, productData);
  }
}
