import Head from 'next/head';
import CardCart from '../src/components/CardCart';
import styles from '../styles/pageStyles/cart.module.scss';
import { useAppSelector } from '../src/hooks/reduceHooks';
import CheckPay from '../src/components/CheckPay';
import NoItem from '../src/components/NoItem';

const Cart: React.FC = () => {
  const { data } = useAppSelector(state => state.cart);
  const total = Number(
    data.reduce((total, item) => total + item.quantityPrice, 0).toFixed(2),
  );

  return (
    <>
      <Head>
        <title>Profile Cart</title>
      </Head>
      <main className={styles.container}>
        {data.length > 0 ? (
          <>
            <section className={styles.items}>
              {data.map((item: any) => {
                return (
                  <CardCart
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    quantity={item.quantity}
                    quantityPrice={item.quantityPrice}
                    id={item.id}
                  />
                );
              })}
            </section>
            <CheckPay total={total} />
          </>
        ) : (
          <NoItem />
        )}
      </main>
    </>
  );
};

export default Cart;
