import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/pageStyles/profile.module.scss';
import userIcon from '../src/images/profilePage/user.svg';
import userIconNav from '../src/images/user.svg';
import locationIcon from '../src/images/profilePage/location.svg';
import bagIcon from '../src/images/profilePage/bag.svg';
import settingIcon from '../src/images/profilePage/gear.svg';
import ProfileSettings from '../src/components/ProfileSettings';

const pages: React.FC = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <main className={styles.container}>
        <section className={styles.navContainer}>
          <Image
            src={userIconNav}
            alt="Profilte Image"
            width={165}
            height={165}
          ></Image>
          <div>
            <h1>My Account</h1>
            <ul>
              <li>
                <Image src={userIcon} alt="user Icon"></Image>
                <p>My details</p>
              </li>
              <li>
                <Image src={locationIcon} alt="location Icon"></Image>
                <p>My adress</p>
              </li>
              <li>
                <Image src={bagIcon} alt="bag Icon"></Image>
                <p>My orders</p>
              </li>
              <li>
                <Image src={settingIcon} alt="settings Icon"></Image>
                <p>Account setting</p>
              </li>
            </ul>
          </div>
        </section>
        <ProfileSettings />
      </main>
    </>
  );
};

export default pages;
