import Image from 'next/image';
import styles from './styles.module.scss';
import heartImg from '../../images/heart.svg';
import starImg from '../../images/star.svg';
import { ApiResponse } from '../../interface/apiInterface';
import Link from 'next/link';

const Card: React.FC<ApiResponse> = ({
  image,
  title,
  rating,
  category,
  price,
  discountPercent,
  id,
}: ApiResponse) => {
  const starsNumber = (): any => {
    const rate = rating?.rate;
    if (typeof rate == 'undefined') return;
    const stars = Math.round(rate);
    return Array(stars).fill('star');
  };

  const priceBeforeDiscount = discountPercent
    ? (price - (price * discountPercent) / 100).toFixed(2)
    : '';
  return (
    <div className={styles.container}>
      <div className={styles.imgCardContainer}>
        <Image src={image} alt={title} width={160} height={160} />
      </div>
      <div className={styles.content}>
        <div className={styles.titleBox}>
          <Link href={`/products/item/${id}`}>
            <h3>{title}</h3>
          </Link>
          <Image src={heartImg} alt={'hearticon'} />
        </div>
        <div className={styles.classificationBox}>
          <p className={styles.category}>{category}</p>
          <div className={styles.avaliationBox}>
            <div>
              {starsNumber().map((item: number, index: number) => {
                return <Image key={index} src={starImg} alt={'starIcon'} />;
              })}
            </div>
            <p> &#40;{rating?.count}&#41;</p>
          </div>
        </div>
        <div className={styles.priceBox}>
          <h3>
            ${priceBeforeDiscount != '' ? priceBeforeDiscount : price}
            {priceBeforeDiscount != '' && <s>${price}</s>}
          </h3>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
