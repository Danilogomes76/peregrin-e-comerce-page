import axios from 'axios';
import Card from '../src/components/Card';
import { ApiResponse } from '../src/interface/apiInterface';

interface Props {
  items: Array<ApiResponse>;
}

function Teste({ items }: Props) {
  return (
    <div>
      {items.length == 0 ? (
        <h1>Item não encontrado</h1>
      ) : (
        items.map(item => (
          <Card
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            category={item.category}
            rating={item.rating}
            id={item.id}
          />
        ))
      )}
    </div>
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

export default Teste;
