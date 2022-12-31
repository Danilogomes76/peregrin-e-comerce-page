import Image from 'next/image';
import React from 'react';
import { ApiResponse } from '../../interface/apiInterface';
import Card from '../Card';
import divisorLeft from '../../images/divider/divisor_left.svg';
import divisorRight from '../../images/divider/divisor_right.svg';

import styles from './styles.module.scss';

interface Props {
  dataItems: any;
}

const BestSellers: React.FC<Props> = ({ dataItems }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.bestSellerText}>
        <Image src={divisorLeft} alt={'divisorLeft'} />
        <h1>Best sellers ;&#41;</h1>
        <Image src={divisorRight} alt={'divisorRight'} />
      </div>
      <div className={styles.bestSellerCards}>
        {dataItems.map((item: ApiResponse) => {
          return (
            <Card
              id={item.id}
              key={item.id}
              image={item.image}
              price={item.price}
              title={item.title}
              rating={item.rating}
              category={item.category}
              discountPercent={10}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BestSellers;
