import axios from 'axios';
import Head from 'next/head';
import Card from '../src/components/Card';
import NoItem from '../src/components/NoItem';
import { ApiResponse } from '../src/interface/apiInterface';
import styles from '../styles/pageStyles/searchedItems.module.scss';

interface Props {
  items: Array<ApiResponse>;
  search: string;
}

const SearchItems: React.FC<Props> = ({ items, search }: Props) => {
  return (
    <>
      <Head>
        <title>Search: {search}</title>
      </Head>
      <main className={styles.container}>
        {items.length == 0 ? (
          <section className={styles.noItem}>
            <h1>Item not found</h1>
            <NoItem size={400} />
          </section>
        ) : (
          <section className={styles.searchedItems}>
            <Card state={items} />
          </section>
        )}
      </main>
    </>
  );
};

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
      search: capitalized,
    },
  };
}

export default SearchItems;
