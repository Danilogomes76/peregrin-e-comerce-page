import Image from 'next/image';
import Link from 'next/link';
import { useCartActions } from '../../hooks/useCartActions';
import { useFavoriteActions } from '../../hooks/useFavoriteActions';
import trashImg from '../../images/trash.svg';
import { FavoriteItem } from '../../store/reducers/favoriteReducer';
import styles from './styles.module.scss';

interface Props {
  favorites: FavoriteItem[];
}

const WishListProducts: React.FC<Props> = ({ favorites }: Props) => {
  const { removeFromFavorites } = useFavoriteActions();
  const { addInCart } = useCartActions();

  return (
    <section className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Product name</th>
            <th>Unit Price</th>
            <th>Stock status</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map(item => {
            return (
              <tr key={item.id}>
                <td className={styles.productName}>
                  <button
                    onClick={() => removeFromFavorites(item.id)}
                    className={styles.trashBtn}
                  >
                    <Image src={trashImg} alt="trash" />
                  </button>
                  <Image
                    className={styles.procuctImg}
                    src={item.image}
                    alt="Item"
                    width={60}
                    height={60}
                  />
                  <Link
                    className={styles.productTitleLink}
                    href={`/products/item/${item.id}`}
                  >
                    {item.title}
                  </Link>
                </td>
                <td>${item.price}</td>
                <td>In stock</td>
                <td className={styles.btnCont}>
                  <button
                    onClick={() => addInCart(item)}
                    className={styles.addToCartBtn}
                  >
                    Add to cart
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default WishListProducts;
