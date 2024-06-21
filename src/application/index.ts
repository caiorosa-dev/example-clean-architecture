import { modules } from '../modules';

function logSpaces() {
  console.log('\n=------------------------------=\n\n');
}

async function main() {
  const user = await modules.user.create.execute({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '123456',
  });

  console.log('Created user: ', user);
  logSpaces();

  const exampleProduct = await modules.product.create.execute({
    name: 'Example Product',
    price: 100,
    stock: 10,
  });

  console.log('Created product: ', exampleProduct);
  logSpaces();

  const examplePaypalOrder = await modules.order.createByPaypal.execute({
    productId: exampleProduct.id,
    quantity: 2,
    userId: user.id,
    status: 'PENDING',
  });

  console.log('\nCreated order by PayPal: ', examplePaypalOrder);
  logSpaces();

  const examplePicpayOrder = await modules.order.createByPicpay.execute({
    productId: exampleProduct.id,
    quantity: 2,
    userId: user.id,
    status: 'PENDING',
  });

  console.log('\nCreated order by PicPay: ', examplePicpayOrder);

  logSpaces();

  console.log('Program finished.');
}

main();
