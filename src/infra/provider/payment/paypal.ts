import { PaymentProvider } from '../../../interfaces/provider/payment';

export class PayPalPaymentProvider implements PaymentProvider {
  async createPayment(orderId: string, amount: number): Promise<void> {
    console.log(`Creating PayPal payment for order ${orderId} with amount ${amount}`);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Payment created for order ${orderId} via PayPal`);
  }

  async approvePayment(orderId: string): Promise<void> {
    console.log(`Approving PayPal payment for order ${orderId}`);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Payment approved for order ${orderId} via PayPal`);
  }

  async cancelPayment(orderId: string): Promise<void> {
    console.log(`Cancelling PayPal payment for order ${orderId}`);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Payment cancelled for order ${orderId} via PayPal`);
  }
}
