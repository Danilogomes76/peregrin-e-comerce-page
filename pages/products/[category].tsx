/* eslint-disable no-useless-escape */
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import NavFilterBar from '../../src/components/NavFilterBar';
import ProductsItems from '../../src/components/ProductsItems';
import { RangeContext } from '../../src/context/RangeContext';
import { useBreakpoint } from '../../src/hooks/useBreakpoint';
import { ApiResponse } from '../../src/interface/apiInterface';
import styles from '../../styles/pageStyles/products.module.scss';

interface Props {
  dataItems: ApiResponse;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { category: 'all' } },
    { params: { category: 'mens-clothing' } },
    { params: { category: 'womens-clothing' } },
    { params: { category: 'jewelery' } },
    { params: { category: 'electronics' } },
  ];
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let category = params?.category;
  if (category == 'womens-clothing') category = `women\'s%20clothing`;
  if (category == 'mens-clothing') category = `men\'s%20clothing`;
  const response = await axios.get(
    category == 'all'
      ? `https://fakestoreapi.com/products?sort=desc`
      : `https://fakestoreapi.com/products/category/${category}`,
    {
      headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
    },
  );
  const dataItems = await response.data;
  return {
    props: {
      dataItems,
    },
    revalidate: 60,
  };
};

const Products: React.FC<Props> = ({ dataItems }: Props) => {
  const { handleChange, rangeValue } = useContext(RangeContext);
  const breakPoint = useBreakpoint(990);

  return (
    <>
      <Head>
        <title>Peregrin Products</title>
      </Head>
      <main className={styles.container}>
        {breakPoint == false && (
          <NavFilterBar rangeValue={rangeValue} onChange={handleChange} />
        )}
        <ProductsItems rangeValue={rangeValue} data={dataItems} />
      </main>
    </>
  );
};

export default Products;
