import axios from 'axios';
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

export async function getServerSideProps() {
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
  };
}
export default Home;
