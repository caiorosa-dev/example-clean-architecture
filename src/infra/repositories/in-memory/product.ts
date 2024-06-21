import IdDataObject from '../../../domain/data-object/IdDataObject';
import { Product } from '../../../domain/entities/Product';
import { ProductRepository, CreateProductDTO, UpdateProductDTO } from '../../../interfaces/repositories/product';

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  async getById(id: string): Promise<Product | null> {
    return this.products.find((product) => product.id === id) || null;
  }

  async getAll(): Promise<Product[]> {
    return this.products;
  }

  async create(productDto: CreateProductDTO): Promise<Product> {
    const newProduct: Product = {
      id: IdDataObject.generate(),
      name: productDto.name,
      price: productDto.price,
      stock: productDto.stock,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.products.push(newProduct);

    return newProduct;
  }

  async update(id: string, productDto: UpdateProductDTO): Promise<Product> {
    const productIndex = this.products.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      const product = this.products[productIndex];
      this.products[productIndex] = {
        ...product,
        name: productDto.name || product.name,
        price: productDto.price || product.price,
        stock: productDto.stock || product.stock,
        updatedAt: new Date(),
      };
    }

    return this.products[productIndex];
  }

  async delete(id: string): Promise<void> {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
