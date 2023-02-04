import {
  notifyAddToCart,
  notifyAlredyInCart,
  notifyRemoveToCart,
} from '../notifys/notifys';
import {
  addToCart,
  removeToCart,
  updateCartItem,
} from '../store/reducers/cartReducer';
import { useAppDispatch, useAppSelector } from './reduceHooks';

export const useCartActions = () => {
  const { data } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const addInCart = (item: any) => {
    if (data.some(i => i.id == item.id)) {
      notifyAlredyInCart();
      return;
    }
    dispatch(
      addToCart({
        ...item,
        quantity: 1,
        quantityPrice: item.price,
      }),
    );
    notifyAddToCart();
  };

  const removeFromCart = (id: number) => {
    notifyRemoveToCart();
    return dispatch(removeToCart(id));
  };

  const updateItem = (value: number, id: number) => {
    return dispatch(updateCartItem({ value: value, id: id }));
  };

  return { addInCart, removeFromCart, updateItem };
};
