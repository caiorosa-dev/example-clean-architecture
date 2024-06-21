import { Order, OrderStatus } from '../../domain/entities/Order';

export interface CreateOrderDTO {
  userId: string;
  productId: string;
  quantity: number;
  status: OrderStatus;
}

export interface UpdateOrderDTO {
  userId?: string;
  productId?: string;
  quantity?: number;
  status?: OrderStatus;
}

export interface OrderRepository {
  getById(id: string): Promise<Order | null>;
  getAll(): Promise<Order[]>;
  create(order: CreateOrderDTO): Promise<Order>;
  update(id: string, order: UpdateOrderDTO): Promise<Order>;
  delete(id: string): Promise<void>;
}
