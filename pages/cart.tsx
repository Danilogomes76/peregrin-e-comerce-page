import Head from 'next/head';

import { useAppSelector } from '../src/hooks/reduceHooks';

const Cart: React.FC = () => {
  const cart = useAppSelector(state => state.cart);
  console.log(cart);

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <main>
        <h1>Cart</h1>
        {cart.map(item => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Cart;
