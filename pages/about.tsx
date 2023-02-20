import Head from 'next/head';
import Image from 'next/image';
import logo from '../src/images/logo-high-size.svg';
import styles from '../styles/pageStyles/about.module.scss';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Peregrin About</title>
      </Head>
      <main className={styles.container}>
        <section className={styles.apresentation}>
          <h1>About us</h1>
          <p>
            The Peregrin Store is an online store that offers a wide variety of
            products to meet the needs of our customers. We believe in providing
            an exceptional shopping experience with a wide range of high quality
            items at competitive prices. With the Peregrin Store, you can find
            everything you need in one place, from electronics and clothing to
            home and garden products. Plus, we offer fast, secure shipping and
            exceptional customer service to ensure your shopping experience is
            the best it can be. Shop with confidence at the Peregrin Store.
          </p>
        </section>
        <section className={styles.logo}>
          <Image src={logo} alt="Logo" fill />
        </section>
      </main>
    </>
  );
};

export default About;
