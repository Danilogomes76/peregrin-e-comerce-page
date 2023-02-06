import Head from 'next/head';
import HelpCard from '../src/components/HelpCard';
import ordersImg from '../src/images/helpPage/cartImg.svg';
import smsImg from '../src/images/helpPage/cellImg.svg';
import contactImg from '../src/images/helpPage/contactImg.svg';
import couponsImg from '../src/images/helpPage/couponImg.svg';
import emailImg from '../src/images/helpPage/emailImg.svg';
import automationImg from '../src/images/helpPage/gearImg.svg';
import myAccImg from '../src/images/helpPage/personImg.svg';
import conversationImg from '../src/images/helpPage/talkImg.svg';
import transactionImg from '../src/images/helpPage/transactionImg.svg';
import styles from '../styles/pageStyles/help.module.scss';

const Help: React.FC = () => {
  return (
    <>
      <Head>
        <title>Peregrin Help</title>
      </Head>
      <main className={styles.container}>
        <section className={styles.searchHead}>
          <h1>We’re here to help</h1>
          <input type="text" placeholder="Search our articles" />
        </section>
        <section className={styles.helpsBox}>
          <section className={styles.helpsCardBox}>
            <HelpCard
              img={myAccImg}
              title={'My Account'}
              className={styles.hlpCard}
              description={'Create and manage your Peregrin account'}
            />
            <HelpCard
              img={emailImg}
              title={'Email connect'}
              className={styles.hlpCard}
              description={'How to connect with email'}
            />
            <HelpCard
              img={smsImg}
              title={'WhatsApp & SMS'}
              className={styles.hlpCard}
              description={'Product check by Whatsapp'}
            />
            <HelpCard
              img={transactionImg}
              title={'Transactional'}
              className={styles.hlpCard}
              description={'Help with cash and card transactions'}
            />
            <HelpCard
              img={contactImg}
              title={'Contact'}
              className={styles.hlpCard}
              description={'How to connect with us'}
            />
            <HelpCard
              img={automationImg}
              title={'Automation'}
              className={styles.hlpCard}
              description={
                'How to configure your user profile to receive offers'
              }
            />
            <HelpCard
              img={ordersImg}
              title={'Orders'}
              className={styles.hlpCard}
              description={'Help with sending and receiving orders placed'}
            />
            <HelpCard
              img={couponsImg}
              title={'Coupons'}
              className={styles.hlpCard}
              description={'Help with discount coupons'}
            />
            <HelpCard
              img={conversationImg}
              title={'Conversations'}
              className={styles.hlpCard}
              description={'Talk with us in chat'}
            />
          </section>
        </section>
      </main>
    </>
  );
};

export default Help;
