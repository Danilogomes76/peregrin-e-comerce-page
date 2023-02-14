import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '../../hooks/reduceHooks';
import { useCartActions } from '../../hooks/useCartActions';
import { useFavoriteActions } from '../../hooks/useFavoriteActions';
import heartImgBlack from '../../images/heart.svg';
import heartImgColor from '../../images/heartColor.svg';
import starImg from '../../images/star.svg';
import { ApiResponse } from '../../interface/apiInterface';
import styles from './styles.module.scss';

interface Props {
  state: any;
}

const Card: React.FC<Props> = ({ state }: Props) => {
  const { addInCart } = useCartActions();
  const { addInFavorites } = useFavoriteActions();
  const { favorites } = useAppSelector(state => state.favorites);

  return (
    <>
      {state.map((item: ApiResponse) => {
        const starsNumber = (): Array<string> | undefined => {
          const rate = item.rating?.rate;
          if (typeof rate == 'undefined') return;
          const stars = Math.round(rate);
          return Array(stars).fill('star');
        };

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
                  <h3
                    style={
                      item.title.length > 94 ? { fontSize: '14px' } : undefined
                    }
                  >
                    {item.title}
                  </h3>
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
                    {starsNumber()?.map((_, index: number) => {
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
