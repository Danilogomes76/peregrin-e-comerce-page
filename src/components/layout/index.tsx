import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useAppDispatch } from '../../hooks/reduceHooks';
import { loadProducts } from '../../store/reducers/cartReducer';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer';
import Header from '../Header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  });

  return (
    <>
      <Header />
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
