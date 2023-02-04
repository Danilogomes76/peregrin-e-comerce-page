/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ApiResponse } from '../../interface/apiInterface';

export type FavoriteItem = ApiResponse & {
  quantity: number;
  quantityPrice: number;
};

export type State = {
  favorites: FavoriteItem[];
};

const initialState: State | void = {
  favorites: [],
};

const SAVED_FAVORITES = 'savedFavorites';

export const cartSlice = createSlice({
  name: 'favoritesReducer',
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<FavoriteItem>) {
      const item = action.payload;

      state.favorites.push(item);
      localStorage.setItem(SAVED_FAVORITES, JSON.stringify(state.favorites));
      return state;
    },
    removeToFavorite(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter(
        items => items.id != action.payload,
      );
      localStorage.setItem(SAVED_FAVORITES, JSON.stringify(state.favorites));
      return state;
    },
    loadFavorite(state) {
      if (localStorage.getItem(SAVED_FAVORITES)) {
        const savedFavorites: FavoriteItem[] = JSON.parse(
          localStorage.getItem(SAVED_FAVORITES)!,
        );
        if (savedFavorites) {
          state.favorites = [...savedFavorites];
        }
        return state;
      }
    },
  },
});

export const { addToFavorites, removeToFavorite, loadFavorite } =
  cartSlice.actions;
export default cartSlice.reducer;
