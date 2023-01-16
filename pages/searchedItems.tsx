import axios from 'axios';
import Image from 'next/image';
import Card from '../src/components/Card';
import logo from '../src/images/logo.svg';
import { ApiResponse } from '../src/interface/apiInterface';
import styles from '../styles/pageStyles/searchedItems.module.scss';

interface Props {
  items: Array<ApiResponse>;
}

function SearchItems({ items }: Props) {
  return (
    <main className={styles.container}>
      {items.length == 0 ? (
        <section className={styles.noItems}>
          <h1>Item not found</h1>
          <Image width={400} src={logo} alt={'logo'} />
        </section>
      ) : (
        <section className={styles.searchedItems}>
          <Card state={items} />
        </section>
      )}
    </main>
  );
}

export async function getServerSideProps(context: any) {
  const { q } = context.query;

  const response = await axios.get('https://fakestoreapi.com/products', {
    headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
  });

  const data: Array<ApiResponse> = await response.data;

  const capitalized: string = q.replace(/\b[a-z]/g, (char: string) => {
    return char.toUpperCase();
  });

  const items = data.filter((item: any) => item.title.includes(capitalized));

  return {
    props: {
      items,
    },
  };
}

export default SearchItems;
