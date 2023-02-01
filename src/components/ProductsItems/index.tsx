import { ApiResponse } from '../../interface/apiInterface';
import Card from '../Card';

import styles from './styles.module.scss';
import NoItem from '../NoItem';

interface Props {
  data: any;
  rangeValue: number;
}

const ProductsItems: React.FC<Props> = ({ data, rangeValue }: Props) => {
  const filtredProducts = data.filter(
    (product: ApiResponse) => product.price < rangeValue,
  );

  return (
    <section className={styles.container}>
      {filtredProducts.length == 0 ? (
        <NoItem size={300} />
      ) : (
        <div className={styles.productItems}>
          <Card state={rangeValue < 1000 ? filtredProducts : data} />
        </div>
      )}
    </section>
  );
};

export default ProductsItems;
