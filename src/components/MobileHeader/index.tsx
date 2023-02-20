import { animated, useSpring } from '@react-spring/web';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { RangeContext } from '../../context/RangeContext';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import logo from '../../images/logo.svg';
import triangle from '../../images/triangle.svg';
import NavFilterBar from '../NavFilterBar';
import styles from './styles.module.scss';

const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };
  const router = useRouter();
  const breakPoint = useBreakpoint(990);
  const { handleChange, rangeValue } = useContext(RangeContext);

  const [dropDown, setDropdown] = useState(false);

  const dropdownAnimationOpen = useSpring({
    height: dropDown ? '214px' : '0px',
  });

  const buttonRotateOpen = useSpring({
    rotate: dropDown ? '-180deg' : '0deg',
  });

  return (
    <>
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
        {router.pathname == '/products/[category]' && breakPoint && (
          <animated.button
            style={buttonRotateOpen}
            className={styles.triangle}
            onClick={() => setDropdown(!dropDown)}
          >
            <Image src={triangle} width={20} height={20} alt="logo" />
          </animated.button>
        )}
      </div>
      {dropDown && (
        <NavFilterBar
          stylesAnimate={dropdownAnimationOpen}
          onChange={handleChange}
          rangeValue={rangeValue}
        />
      )}
    </>
  );
};

export default MobileHeader;
