import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RangeProvider } from '../../context/RangeContext';
import { useAppDispatch } from '../../hooks/reduceHooks';
import { useBreakpoint } from '../../hooks/useBreakpoint';
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
  const breakPoint = useBreakpoint(1169);

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadFavorite());
  });

  return (
    <>
      <RangeProvider>
        {breakPoint ? <MobileHeader /> : <Header />}
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
      </RangeProvider>
      <Footer />
    </>
  );
};

export default Layout;
