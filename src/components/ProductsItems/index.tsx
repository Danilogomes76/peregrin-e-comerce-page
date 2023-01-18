import Image from 'next/image';
import { ApiResponse } from '../../interface/apiInterface';
import Card from '../Card';
import logo from '../../images/logo-high-size.svg';
import styles from './styles.module.scss';

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
        <Image className={styles.logo} width={300} src={logo} alt={'logo'} />
      ) : (
        <div className={styles.productItems}>
          <Card state={rangeValue < 1000 ? filtredProducts : data} />
        </div>
      )}
    </section>
  );
};

export default ProductsItems;
