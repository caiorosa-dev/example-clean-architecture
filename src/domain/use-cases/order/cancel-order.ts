import { OrderRepository } from '../../../interfaces/repositories/order';

export class CancelOrderUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute(orderId: string): Promise<void> {
    const order = await this.orderRepository.getById(orderId);

    if (!order) {
      throw new Error('Order not found');
    }

    if (order.status === 'CANCELLED') {
      throw new Error('Order is already cancelled');
    }

    await this.orderRepository.update(orderId, { status: 'CANCELLED' });
  }
}
