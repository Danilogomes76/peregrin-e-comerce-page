import Head from 'next/head';
import CardCart from '../src/components/CardCart';
import styles from '../styles/pageStyles/cart.module.scss';
import { useAppSelector } from '../src/hooks/reduceHooks';

const Cart: React.FC = () => {
  const { data } = useAppSelector(state => state.cart);
  const total = data.reduce((total, item) => total + item.price, 0).toFixed(2);
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <main className={styles.container}>
        <h1>Total: ${total}</h1>
        <div className={styles.items}>
          {data.map((item: any) => {
            return (
              <CardCart
                key={item.id}
                image={item.image}
                title={item.title}
                quantity={item.quantity}
                price={item.price}
                id={item.id}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Cart;
