import axios from 'axios';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import BestSellers from '../src/components/BestSellers';
import Carrosel from '../src/components/Carrosel';
import Categorys from '../src/components/Categorys';

interface Props {
  data: any;
}

const Home: React.FC<Props> = ({ data }: Props) => {
  return (
    <>
      <Head>
        <title>Peregrin Store</title>
      </Head>
      <main>
        <Carrosel />
        <BestSellers dataItems={data} />
        <Categorys />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(
    'https://fakestoreapi.com/products?limit=4',
    {
      headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
    },
  );
  const data = await response.data;
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};
export default Home;
