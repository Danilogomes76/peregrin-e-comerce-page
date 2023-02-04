import {
  notifyAddToFavorites,
  notifyRemoveToFavorites,
} from '../notifys/notifys';
import {
  addToFavorites,
  removeToFavorite,
} from '../store/reducers/favoriteReducer';
import { useAppDispatch, useAppSelector } from './reduceHooks';

export const useFavoriteActions = () => {
  const { favorites } = useAppSelector(state => state.favorites);
  const dispatch = useAppDispatch();

  const addInFavorites = (card: any) => {
    if (favorites.some(i => i.id == card.id)) {
      return dispatch(removeFromFavorites(card.id));
    }
    dispatch(addToFavorites(card));
    notifyAddToFavorites();
  };

  const removeFromFavorites = (id: number) => {
    notifyRemoveToFavorites();
    return dispatch(removeToFavorite(id));
  };

  return { addInFavorites, removeFromFavorites };
};
