import Image from 'next/image';
import React, { useState } from 'react';
import logoImg from '../../images/logo.svg';
import cartImg from '../../images/cart.svg';
import userImg from '../../images/user.svg';
import lupaImg from '../../images/lupa.svg';
import styles from './styles.module.scss';
import Link from 'next/link';

const Header: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Image src={logoImg} alt="logo" width={90} height={90} />
        <Link href="/">
          <h1>Peregrin Store</h1>
        </Link>
      </div>
      <div className={styles.navBar}>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/products/all">
            <li>Products</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/help">
            <li>Help</li>
          </Link>
        </ul>
        <form className={styles.search}>
          <input
            type="text"
            onChange={e => setValue(e.target.value)}
            value={value}
            placeholder="Search a product"
          />
          <Link href={`/searchedItems?q=${value}`}>
            <button>
              <Image src={lupaImg} alt="lupaSearchImg" width={15} height={15} />
            </button>
          </Link>
        </form>
        <div className={styles.headerIcons} data-count={1}>
          <Image
            className={styles.cart}
            src={cartImg}
            alt="cart"
            width={36}
            height={36}
          />
          <Image src={userImg} alt="user" width={36} height={36} />
        </div>
      </div>
    </header>
  );
};

export default Header;
