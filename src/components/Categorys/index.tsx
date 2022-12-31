/* eslint-disable react/no-unescaped-entities */
import styles from './styles.module.scss';
import women from '../../images/categorys/women.svg';
import men from '../../images/categorys/men.svg';
import eletronics from '../../images/categorys/eletronics.svg';
import jewelry from '../../images/categorys/jewelry.svg';
import Image from 'next/image';
import Link from 'next/link';

const Categorys: React.FC = () => {
  return (
    <section className={styles.container}>
      <Link href={'/products/womens-clothing'}>
        <div className={styles.cardCategory}>
          <div className={styles.imageContainer}>
            <Image src={women} alt={'women'} />
          </div>
          <h2>Women's clothing</h2>
        </div>
      </Link>
      <Link href={'/products/mens-clothing'}>
        <div className={styles.cardCategory}>
          <div className={styles.imageContainer}>
            <Image src={men} alt={'men'} />
          </div>
          <h2>Men's clothing</h2>
        </div>
      </Link>
      <Link href={'/products/electronics'}>
        <div className={styles.cardCategory}>
          <div className={styles.imageContainer}>
            <Image src={eletronics} alt={'electronics'} />
          </div>
          <h2>Electronics</h2>
        </div>
      </Link>
      <Link href={'/products/jewelery'}>
        <div className={styles.cardCategory}>
          <div className={styles.imageContainer}>
            <Image src={jewelry} alt={'jewelery'} />
          </div>
          <h2>Jewelery</h2>
        </div>
      </Link>
    </section>
  );
};

export default Categorys;
