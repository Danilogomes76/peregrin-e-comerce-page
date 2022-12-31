import Image from 'next/image';
import { ApiResponse } from '../../interface/apiInterface';
import Card from '../Card';
import logo from '../../images/logo.svg';
import styles from './styles.module.scss';

interface Props {
  data: any;
  rangeValue: number;
}

const ProductsItems: React.FC<Props> = ({ data, rangeValue }: Props) => {
  const discount = 1;
  const filtredProducts = data.filter(
    (product: ApiResponse) => product.price < rangeValue,
  );

  return (
    <section className={styles.container}>
      {rangeValue == 0 ? (
        <Image className={styles.logo} width={300} src={logo} alt={'logo'} />
      ) : (
        <div className={styles.productItems}>
          {rangeValue < 1000
            ? filtredProducts.map((item: ApiResponse) => {
                return (
                  <Card
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    category={item.category}
                    rating={item.rating}
                    id={item.id}
                    discountPercent={discount}
                  />
                );
              })
            : data.map((item: ApiResponse) => {
                return (
                  <Card
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    category={item.category}
                    rating={item.rating}
                    id={item.id}
                    discountPercent={discount}
                  />
                );
              })}
        </div>
      )}
    </section>
  );
};

export default ProductsItems;
