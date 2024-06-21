import { CancelOrderUseCase } from './domain/use-cases/order/cancel-order';
import { CreateOrderUseCase } from './domain/use-cases/order/create-order';
import { UpdateOrderUseCase } from './domain/use-cases/order/update-order';
import { CreateProductUseCase } from './domain/use-cases/product/create-product';
import { DeleteProductUseCase } from './domain/use-cases/product/delete-product';
import { UpdateProductUseCase } from './domain/use-cases/product/update-product';
import { CreateUserUseCase } from './domain/use-cases/user/create-user';
import { DeleteUserUseCase } from './domain/use-cases/user/delete-user';
import { UpdateUserUseCase } from './domain/use-cases/user/update-user';
import { SmtpEmailProvider } from './infra/provider/email/smtp';
import { PayPalPaymentProvider } from './infra/provider/payment/paypal';
import { PicPayPaymentProvider } from './infra/provider/payment/pic-pay';
import { InMemoryOrderRepository } from './infra/repositories/in-memory/order';
import { InMemoryProductRepository } from './infra/repositories/in-memory/product';
import { InMemoryUserRepository } from './infra/repositories/in-memory/user';

const orderRepository = new InMemoryOrderRepository();
const productRepository = new InMemoryProductRepository();
const userRepository = new InMemoryUserRepository();

const mailProvider = new SmtpEmailProvider();
const paypalProvider = new PayPalPaymentProvider();
const picpayProvider = new PicPayPaymentProvider();

export const modules = {
  order: {
    createByPaypal: new CreateOrderUseCase(orderRepository, productRepository, paypalProvider, mailProvider),
    createByPicpay: new CreateOrderUseCase(orderRepository, productRepository, picpayProvider, mailProvider),
    update: new UpdateOrderUseCase(orderRepository),
    cancel: new CancelOrderUseCase(orderRepository),
  },
  product: {
    create: new CreateProductUseCase(productRepository),
    update: new UpdateProductUseCase(productRepository),
    delete: new DeleteProductUseCase(productRepository),
  },
  user: {
    create: new CreateUserUseCase(userRepository),
    update: new UpdateUserUseCase(userRepository),
    delete: new DeleteUserUseCase(userRepository),
  },
};
