import { PaymentProvider } from '../../../interfaces/provider/payment';

export class PicPayPaymentProvider implements PaymentProvider {
  async createPayment(orderId: string, amount: number): Promise<void> {
    console.log(`Criando pagamento via PicPay para o pedido ${orderId} com o valor ${amount}`);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulação de delay da API
    console.log(`Pagamento criado para o pedido ${orderId} via PicPay`);
  }

  async approvePayment(orderId: string): Promise<void> {
    console.log(`Aprovando pagamento via PicPay para o pedido ${orderId}`);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulação de delay da API
    console.log(`Pagamento aprovado para o pedido ${orderId} via PicPay`);
  }

  async cancelPayment(orderId: string): Promise<void> {
    console.log(`Cancelando pagamento via PicPay para o pedido ${orderId}`);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulação de delay da API
    console.log(`Pagamento cancelado para o pedido ${orderId} via PicPay`);
  }
}
