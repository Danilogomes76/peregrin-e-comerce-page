import type { AppProps } from 'next/app';
import '../styles/globalCss.scss';
import Layout from '../src/components/layout';
import '@fontsource/almarai';
import '@fontsource/inter';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/image/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
