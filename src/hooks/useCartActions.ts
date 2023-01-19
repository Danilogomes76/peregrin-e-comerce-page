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

export const useActions = () => {
  const { data } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const addInCart = (card: any) => {
    if (data.some(i => i.id == card.id)) {
      notifyAlredyInCart();
      return;
    }
    dispatch(
      addToCart({
        ...card,
        quantity: 1,
        quantityPrice: card.price,
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
