import '@fontsource/almarai';
import '@fontsource/inter';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import Layout from '../src/components/layout';
import store from '../src/store/store';
import '../styles/globalCss.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <link rel="shortcut icon" href="/image/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
