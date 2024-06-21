export type OrderStatus = 'PENDING' | 'COMPLETED' | 'CANCELLED';

export interface Order {
  id: string;

  userId: string;
  productId: string;
  quantity: number;
  status: OrderStatus;

  createdAt: Date;
  updatedAt: Date;
}
