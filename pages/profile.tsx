import Head from 'next/head';
import styles from '../styles/pageStyles/profile.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const pages: React.FC = () => {
  const notify = () => toast('Wow so easy!');
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className={styles.container}>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    </>
  );
};

export default pages;
