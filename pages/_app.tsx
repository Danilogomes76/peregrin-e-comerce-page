import type { AppProps } from 'next/app';
import '../styles/globalCss.scss';
import Layout from '../src/components/layout';
import '@fontsource/almarai';
import '@fontsource/inter';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../src/store/store';

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
