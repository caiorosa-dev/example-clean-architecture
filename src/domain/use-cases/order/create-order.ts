import { OrderRepository } from '../../../interfaces/repositories/order';
import { PaymentProvider } from '../../../interfaces/provider/payment';
import { EmailProvider } from '../../../interfaces/provider/email';
import { CreateOrderDTO } from '../../../interfaces/repositories/order';
import { Order } from '../../entities/Order';
import { ProductRepository } from '../../../interfaces/repositories/product';

export class CreateOrderUseCase {
  constructor(
    private orderRepository: OrderRepository,
    private productRepository: ProductRepository,
    private paymentProvider: PaymentProvider,
    private emailProvider: EmailProvider
  ) {}

  async execute(orderData: CreateOrderDTO): Promise<Order> {
    const product = await this.productRepository.getById(orderData.productId);

    if (!product) {
      throw new Error('Product not found');
    }

    if (product.stock < orderData.quantity) {
      throw new Error('Insufficient stock');
    }

    product.stock -= orderData.quantity;
    await this.productRepository.update(product.id, { stock: product.stock });

    const totalOrderPrice = orderData.quantity * product.price;
    const order = await this.orderRepository.create(orderData);

    await this.paymentProvider.createPayment(order.id, totalOrderPrice);

    await this.emailProvider.sendEmail(
      'customer@example.com',
      'Order Confirmation',
      `Your order with ID ${order.id} has been successfully created and paid.`
    );

    return order;
  }
}
