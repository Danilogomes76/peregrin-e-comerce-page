import Head from 'next/head';
import CardCart from '../src/components/CardCart';
import logo from '../src/images/logo.svg';
import styles from '../styles/pageStyles/cart.module.scss';
import { useAppSelector } from '../src/hooks/reduceHooks';
import Image from 'next/image';
import CheckPay from '../src/components/CheckPay';

const Cart: React.FC = () => {
  const { data } = useAppSelector(state => state.cart);
  const total = Number(
    data.reduce((total, item) => total + item.quantityPrice, 0).toFixed(2),
  );
  console.log(total);

  return (
    <>
      <Head>
        <title>Cart</title>
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
          <section className={styles.cartEmpty}>
            <h1>Cart Empty</h1>
            <Image width={400} src={logo} alt={'logo'} />
          </section>
        )}
      </main>
    </>
  );
};

export default Cart;
