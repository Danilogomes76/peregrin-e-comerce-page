/* eslint-disable no-constant-condition */
import { GetStaticProps, GetStaticPaths } from 'next';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { ApiResponse } from '../../../src/interface/apiInterface';
import styles from '../../../styles/pageStyles/itemPage.module.scss';
import starImg from '../../../src/images/star.svg';
import { useStarsNumber } from '../../../src/hooks/useStar';
import {
  notifyAddToCart,
  notifyAlredyInCart,
} from '../../../src/notifys/notifys';
import { addToCart } from '../../../src/store/reducers/cartReducer';
import { useAppDispatch, useAppSelector } from '../../../src/hooks/reduceHooks';

interface Props {
  dataItem: ApiResponse;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get('https://fakestoreapi.com/products', {
    headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
  });
  const data = await response.data;

  const paths = data.map((item: ApiResponse) => {
    return {
      params: {
        id: item.id?.toString(),
      },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`, {
    headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
  });
  const dataItem = await response.data;
  return {
    props: {
      dataItem,
    },
    revalidate: 60 * 5,
  };
};

const Product = ({ dataItem }: Props) => {
  const [sku, setSku] = useState(0);
  const [haveSize, setHaveSize] = useState(true);

  useEffect(() => setSku(Math.round(Math.random() * 10000000)), []);

  useEffect(() => {
    dataItem.category == 'electronics' || dataItem.category == 'jewelery'
      ? setHaveSize(false)
      : haveSize;
  }, [dataItem.category, haveSize]);

  const starsNumber = useStarsNumber(dataItem.rating?.rate);

  const { data } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const addInCart = (card: any) => {
    if (data.some(i => i.id == card.id)) {
      notifyAlredyInCart();
      return;
    }
    dispatch(
      addToCart({
        ...card,
        quantity: 1,
        quantityPrice: card.price,
      }),
    );
    notifyAddToCart();
  };

  return (
    <>
      <Head>
        <title>{dataItem.title}</title>
      </Head>
      <main>
        <section className={styles.container}>
          <div>
            <Image
              src={dataItem.image}
              alt={dataItem.title}
              width={635}
              height={635}
            />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.priceContainer}>
              <h1>{dataItem.title}</h1>
              <div className={styles.classification}>
                <p>SKU: {sku}</p>
                <div>
                  {starsNumber?.map((item: any, index: number) => {
                    return <Image key={index} src={starImg} alt={'starIcon'} />;
                  })}
                </div>
                <p> &#40;{dataItem.rating?.count}&#41;</p>
              </div>
              <p>R${dataItem.price}</p>
            </div>
            {haveSize && (
              <div className={styles.sizeContainer}>
                <p>Size</p>
                <div>
                  <button>P</button>
                  <button>M</button>
                  <button>G</button>
                  <button>GG</button>
                </div>
              </div>
            )}
            <div className={styles.addCartContainer}>
              <p>Sent by</p>
              <div className={styles.sendContainer}>
                <div>
                  <p className={styles.disaled}>International</p>
                  <p className={styles.enabled}>National Shipping</p>
                </div>
                <p>
                  This is a <b>National Shipping</b> product. Different
                  marketplaces will have different shipping rates, delivery
                  times and activities.
                </p>
              </div>
            </div>
            <div className={styles.descriptionContainer}>
              <p className={styles.descriptionTitle}>Description</p>
              <p>{dataItem.description}</p>
            </div>
            <button
              onClick={() => addInCart(dataItem)}
              className={styles.addToCart}
            >
              ADD TO CART
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Product;
