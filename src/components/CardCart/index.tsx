import Image from 'next/image';
import styles from './styles.module.scss';
import mais_icon from '../../images/mais-icon.svg';
import menos_icon from '../../images/menos-icon.svg';
import { removeToCart, updateCartItem } from '../../store/reducers/cartReducer';
import { useAppDispatch } from '../../hooks/reduceHooks';
import { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useCartActions';

interface Props {
  image: string;
  title: string;
  quantity: number;
  quantityPrice: number;
  id: number;
}

const CardCart: React.FC<Props> = ({
  image,
  quantityPrice,
  quantity,
  title,
  id,
}: Props) => {
  const { removeFromCart, updateItem } = useActions();

  const [value, setValue] = useState(quantity);

  useEffect(() => {
    if (value < 1) {
      setValue(1);
      return;
    }

    updateItem(value, id);
  }, [value, id, updateItem]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.nameAndImg}>
          <Image src={image} alt={title} width={80} height={80} />
          <div className={styles.titleBox}>
            <p style={title.length > 38 ? { fontSize: '11px' } : undefined}>
              {title}
            </p>
            <button onClick={() => removeFromCart(id)}>Remove</button>
          </div>
        </div>
        <div className={styles.quantityPriceBox}>
          <div className={styles.quantity}>
            <p>Quantity</p>
            <div className={styles.inputQuantity}>
              <button onClick={() => setValue(e => e - 1)}>
                <Image
                  src={menos_icon}
                  alt="menos-icon"
                  width={22}
                  height={22}
                />
              </button>
              <input
                type="number"
                onChange={e => setValue(parseInt(e.target.value))}
                value={quantity}
                readOnly
              />
              <button onClick={() => setValue(e => e + 1)}>
                <Image src={mais_icon} alt="mais-icon" width={22} height={22} />
              </button>
            </div>
          </div>
          <div>
            <p>Price</p>
            <p className={styles.price}>${quantityPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
