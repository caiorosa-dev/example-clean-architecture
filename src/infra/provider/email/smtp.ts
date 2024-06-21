import { EmailProvider } from '../../../interfaces/provider/email';

export class SmtpEmailProvider implements EmailProvider {
  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    console.log(`Enviando email para ${to}`);
    console.log(`Assunto: ${subject}`);
    console.log(`Corpo: ${body}`);

    // Simulação de envio de email via SMTP
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulação de delay do envio

    console.log(`Email enviado para ${to} com sucesso`);
  }
}
