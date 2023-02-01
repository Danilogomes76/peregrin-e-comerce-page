/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import styles from './styles.module.scss';
import filterIcon from '../../images/filterIcon.svg';
import Image from 'next/image';
import { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

interface Props {
  rangeValue: number;
  onChange: any;
}

const NavFilterBar: React.FC<Props> = ({ onChange, rangeValue }: Props) => {
  const [visibleFilter, setVisibleFilter] = useState(false);

  // const [spring, api] = useSpring(() => ({
  //   from: {
  //     opacity: visibleFilter ? 1 : 0,
  //   },
  //   config: { duration: 500 },
  // }));

  // const handleAppear = () => {
  //   api.start({
  //     from: {
  //       opacity: visibleFilter ? 1 : 0,
  //     },
  //     to: {
  //       opacity: visibleFilter ? 0 : 1,
  //     },
  //   });
  //   setVisibleFilter(!visibleFilter);
  // };

  const [spring, api] = useSpring(() => ({
    from: {
      display: visibleFilter ? 'initial' : 'none',
      opacity: visibleFilter ? 1 : 0,
    },
    config: { duration: 500 },
  }));

  const handleAppear = () => {
    api.start({
      from: {
        display: visibleFilter ? 'initial' : 'none',
        opacity: visibleFilter ? 1 : 0,
      },
      to: {
        opacity: visibleFilter ? 0 : 1,
        display: visibleFilter ? 'none' : 'initial',
      },
    });
    setVisibleFilter(!visibleFilter);
  };

  return (
    <section className={styles.container}>
      <ul>
        <Link href="/products/all">
          <li className={styles.Mrgl}>All products</li>
        </Link>
        <Link href="/products/womens-clothing">
          <li className={styles.Mrgl}>Womens clothing</li>
        </Link>
        <Link href="/products/mens-clothing">
          <li className={styles.Mrgl}>Mens clothing</li>
        </Link>
        <Link href="/products/electronics">
          <li className={styles.Mrgl}>Electronics</li>
        </Link>
        <Link href="/products/jewelery">
          <li className={styles.Mrgl}>Jewelery</li>
        </Link>
      </ul>
      <div className={styles.filterContainer}>
        <button onClick={() => handleAppear()}>
          <Image src={filterIcon} alt="filterIcon" />
        </button>
        <animated.div
          onMouseLeave={() => handleAppear()}
          style={{ ...spring }}
          className={styles.filter}
        >
          <p>
            Max price
            <input
              min="0"
              max="1000"
              onChange={onChange}
              type="range"
              value={rangeValue}
            />
            $ {rangeValue}
          </p>
        </animated.div>
      </div>
    </section>
  );
};

export default NavFilterBar;
