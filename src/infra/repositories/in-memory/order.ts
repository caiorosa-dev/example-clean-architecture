import IdDataObject from '../../../domain/data-object/IdDataObject';
import { Order } from '../../../domain/entities/Order';
import { OrderRepository, CreateOrderDTO, UpdateOrderDTO } from '../../../interfaces/repositories/order';

export class InMemoryOrderRepository implements OrderRepository {
  private orders: Order[] = [];

  async getById(id: string): Promise<Order | null> {
    return this.orders.find((order) => order.id === id) || null;
  }

  async getAll(): Promise<Order[]> {
    return this.orders;
  }

  async create(orderDto: CreateOrderDTO): Promise<Order> {
    const newOrder: Order = {
      id: IdDataObject.generate(),
      userId: orderDto.userId,
      productId: orderDto.productId,
      quantity: orderDto.quantity,
      status: orderDto.status,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.orders.push(newOrder);

    return newOrder;
  }

  async update(id: string, orderDto: UpdateOrderDTO): Promise<Order> {
    const orderIndex = this.orders.findIndex((order) => order.id === id);
    if (orderIndex !== -1) {
      const order = this.orders[orderIndex];
      this.orders[orderIndex] = {
        ...order,
        userId: orderDto.userId || order.userId,
        productId: orderDto.productId || order.productId,
        quantity: orderDto.quantity || order.quantity,
        status: orderDto.status || order.status,
        updatedAt: new Date(),
      };
    }

    return this.orders[orderIndex];
  }

  async delete(id: string): Promise<void> {
    this.orders = this.orders.filter((order) => order.id !== id);
  }
}
