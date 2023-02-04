import Image from 'next/image';
import NoItem from '../src/components/NoItem';
import WishListProducts from '../src/components/WishListProducts';
import { useAppSelector } from '../src/hooks/reduceHooks';

import heartImg from '../src/images/heart.svg';
import styles from '../styles/pageStyles/favorites.module.scss';

const Favorites: React.FC = () => {
  const { favorites } = useAppSelector(state => state.favorites);
  return (
    <main className={styles.container}>
      <section className={styles.apresentation}>
        <Image src={heartImg} alt="HeartImg" width={70} height={70} />
        <h1>My wishlist</h1>
      </section>
      {favorites.length > 0 ? (
        <WishListProducts favorites={favorites} />
      ) : (
        <section className={styles.noItems}>
          <h2>Empty</h2>
          <NoItem size={300} />
        </section>
      )}
    </main>
  );
};

export default Favorites;
