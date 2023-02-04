import Image from 'next/image';
import styles from './styles.module.scss';
import heartImgBlack from '../../images/heart.svg';
import heartImgColor from '../../images/heartColor.svg';
import starImg from '../../images/star.svg';
import Link from 'next/link';
import { ApiResponse } from '../../interface/apiInterface';
import { useCartActions } from '../../hooks/useCartActions';
import { useFavoriteActions } from '../../hooks/useFavoriteActions';
import { useAppSelector } from '../../hooks/reduceHooks';
import { useStarsNumber } from '../../hooks/useStar';

interface Props {
  state: any;
}

const Card: React.FC<Props> = ({ state }: Props) => {
  const { addInCart } = useCartActions();
  const { addInFavorites } = useFavoriteActions();
  const { favorites } = useAppSelector(state => state.favorites);

  const SetStars = (item: ApiResponse) => {
    return useStarsNumber(item.rating.rate);
  };

  return (
    <>
      {state.map((item: ApiResponse) => {
        const starsNumber = SetStars(item);

        return (
          <div key={item.id} className={styles.container}>
            <div className={styles.imgCardContainer}>
              <Image
                src={item.image}
                alt={item.title}
                width={160}
                height={160}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.titleBox}>
                <Link href={`/products/item/${item.id}`}>
                  <h3>{item.title}</h3>
                </Link>
                <button onClick={() => addInFavorites(item)}>
                  {favorites.some(i => i.id == item.id) ? (
                    <Image src={heartImgColor} alt={'Favorited'} />
                  ) : (
                    <Image src={heartImgBlack} alt={'NoFavorited'} />
                  )}
                </button>
              </div>
              <div className={styles.classificationBox}>
                <p className={styles.category}>{item.category}</p>
                <div className={styles.avaliationBox}>
                  <div>
                    {starsNumber.map((_, index: number) => {
                      return (
                        <Image key={index} src={starImg} alt={'starIcon'} />
                      );
                    })}
                  </div>
                  <p> &#40;{item.rating?.count}&#41;</p>
                </div>
              </div>
              <div className={styles.priceBox}>
                <h3>${item.price}</h3>
                <button onClick={() => addInCart(item)}>Add to cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
