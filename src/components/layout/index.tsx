import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/reduceHooks';
import { loadProducts } from '../../store/reducers/cartReducer';
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
      <Footer />
    </>
  );
};

export default Layout;
