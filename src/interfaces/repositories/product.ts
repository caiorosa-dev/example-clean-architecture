import { Product } from '../../domain/entities/Product';

export interface CreateProductDTO {
  name: string;
  price: number;
  stock: number;
}

export interface UpdateProductDTO {
  name?: string;
  price?: number;
  stock?: number;
}

export interface ProductRepository {
  getById(id: string): Promise<Product | null>;
  getAll(): Promise<Product[]>;
  create(product: CreateProductDTO): Promise<Product>;
  update(id: string, product: UpdateProductDTO): Promise<Product>;
  delete(id: string): Promise<void>;
}
