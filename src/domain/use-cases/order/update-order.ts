import { OrderRepository } from '../../../interfaces/repositories/order';
import { UpdateOrderDTO } from '../../../interfaces/repositories/order';
import { Order } from '../../entities/Order';

export class UpdateOrderUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute(orderId: string, orderData: UpdateOrderDTO): Promise<Order> {
    const order = await this.orderRepository.getById(orderId);

    if (!order) {
      throw new Error('Order not found');
    }

    return this.orderRepository.update(orderId, orderData);
  }
}
