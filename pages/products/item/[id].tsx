import { GetStaticProps, GetStaticPaths } from 'next';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { ApiResponse } from '../../../src/interface/apiInterface';

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
  };
};

const Product = ({ dataItem }: Props) => {
  return (
    <>
      <Head>
        <title>{dataItem.title}</title>
      </Head>
      <h1>{dataItem.title}</h1>
      <Image
        src={dataItem.image}
        alt={dataItem.title}
        width={200}
        height={200}
      />
    </>
  );
};

export default Product;
