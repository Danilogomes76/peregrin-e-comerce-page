import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import logo from '../../images/logo.svg';
import styles from './styles.module.scss';

const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className={styles.container}>
      <button onClick={toggleDrawer}>
        <Image src={logo} width={60} height={60} alt="logo" />
      </button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
        <section className={styles.navBar}>
          <ul>
            <Link onClick={toggleDrawer} href="/">
              <li>Home</li>
            </Link>
            <Link onClick={toggleDrawer} href="/products/all">
              <li>Products</li>
            </Link>
            <Link onClick={toggleDrawer} href="/contact">
              <li>Contact us</li>
            </Link>
            <Link onClick={toggleDrawer} href="/about">
              <li>About us</li>
            </Link>
            <Link onClick={toggleDrawer} href="/help">
              <li>Help</li>
            </Link>
          </ul>
        </section>
      </Drawer>
    </div>
  );
};

export default MobileHeader;
