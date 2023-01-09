import Image from 'next/image';
import styles from './styles.module.scss';
import { removeToCart, updateCartItem } from '../../store/reducers/cartReducer';
import { useAppDispatch } from '../../hooks/reduceHooks';
import { useEffect, useState } from 'react';

interface Props {
  image: string;
  title: string;
  quantity: number;
  price: number;
  id: number;
}

const CardCart: React.FC<Props> = ({
  image,
  price,
  quantity,
  title,
  id,
}: Props) => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState(quantity);

  useEffect(() => {
    if (value < 1) {
      setValue(1);
      return;
    }

    const updateItem = (value: number, id: number) => {
      dispatch(updateCartItem({ value: value, id: id }));
    };

    updateItem(value, id);
  }, [value, dispatch, id]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.nameAndImg}>
          <Image src={image} alt={title} width={80} height={80} />
          <div className={styles.titleBox}>
            <p>{title}</p>
            <button onClick={() => dispatch(removeToCart(id))}>Remove</button>
          </div>
        </div>
        <div className={styles.quantityPriceBox}>
          <div>
            <p>Quantity</p>
            <button onClick={() => setValue(e => e - 1)}>-</button>
            <input
              type="number"
              onChange={e => setValue(parseInt(e.target.value))}
              value={quantity}
              readOnly
            />
            <button onClick={() => setValue(e => e + 1)}>+</button>
          </div>
          <div>
            <p>Price</p>
            <p className={styles.price}>${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
