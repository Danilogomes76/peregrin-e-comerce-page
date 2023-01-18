import { toast } from 'react-toastify';

export const notifyAlredyInCart = () => {
  toast.info('The product is already in the cart!', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};

export const notifyAddToCart = () => {
  toast.success('Added to cart!', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};
