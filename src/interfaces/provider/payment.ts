export interface PaymentProvider {
  createPayment(orderId: string, amount: number): Promise<void>;
  approvePayment(orderId: string): Promise<void>;
  cancelPayment(orderId: string): Promise<void>;
}
