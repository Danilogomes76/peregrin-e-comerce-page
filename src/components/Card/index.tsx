import Image from 'next/image';
import styles from './styles.module.scss';
import heartImg from '../../images/heart.svg';
import starImg from '../../images/star.svg';
import Link from 'next/link';
import { ApiResponse } from '../../interface/apiInterface';

interface Props {
  state: any;
}

const Card: React.FC<Props> = ({ state }: Props) => {
  const discount = 0;

  return (
    <>
      {state.map((card: ApiResponse) => {
        const starsNumber = (): Array<string> | undefined => {
          const rate = card.rating?.rate;
          if (typeof rate == 'undefined') return;
          const stars = Math.round(rate);
          return Array(stars).fill('star');
        };

        const priceBeforeDiscount: number | string = discount
          ? (card.price - (card.price * discount) / 100).toFixed(2)
          : '';
        return (
          <>
            <div key={card.id} className={styles.container}>
              <div className={styles.imgCardContainer}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={160}
                  height={160}
                />
              </div>
              <div className={styles.content}>
                <div className={styles.titleBox}>
                  <Link href={`/products/item/${card.id}`}>
                    <h3>{card.title}</h3>
                  </Link>
                  <Image src={heartImg} alt={'hearticon'} />
                </div>
                <div className={styles.classificationBox}>
                  <p className={styles.category}>{card.category}</p>
                  <div className={styles.avaliationBox}>
                    <div>
                      {starsNumber()?.map((item: any, index: number) => {
                        return (
                          <Image key={index} src={starImg} alt={'starIcon'} />
                        );
                      })}
                    </div>
                    <p> &#40;{card.rating?.count}&#41;</p>
                  </div>
                </div>
                <div className={styles.priceBox}>
                  <h3>
                    $
                    {priceBeforeDiscount != ''
                      ? priceBeforeDiscount
                      : card.price}
                    {priceBeforeDiscount != '' && <s>${card.price}</s>}
                  </h3>
                  <button>Add to cart</button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
