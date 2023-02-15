import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from '../../hooks/reduceHooks';
import { loadProducts } from '../../store/reducers/cartReducer';
import { loadFavorite } from '../../store/reducers/favoriteReducer';
import Footer from '../Footer';
import Header from '../Header';
import MobileHeader from '../MobileHeader';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1170) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadFavorite());
  });

  return (
    <>
      {isSmallScreen ? <MobileHeader /> : <Header />}

      {children}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <Footer />
    </>
  );
};

export default Layout;
