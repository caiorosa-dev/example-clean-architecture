import { ProductRepository } from '../../../interfaces/repositories/product';

export class DeleteProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(productId: string): Promise<void> {
    const product = await this.productRepository.getById(productId);

    if (!product) {
      throw new Error('Product not found');
    }

    await this.productRepository.delete(productId);
  }
}
