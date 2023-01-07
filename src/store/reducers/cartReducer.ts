/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ApiResponse } from '../../interface/apiInterface';

export type State = ApiResponse[];

const initialState: State | void = [];

const SAVED_PRODUCTS = 'savedItems';

export const cartSlice = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ApiResponse>) {
      const item = action.payload;
      state.push(item);
      console.log('adicionado');
      localStorage.setItem(SAVED_PRODUCTS, JSON.stringify(state));
      return state;
    },
    removeToCart(state, action: PayloadAction<ApiResponse>) {
      console.log(action);
      localStorage.setItem(SAVED_PRODUCTS, JSON.stringify(state));
      return state;
    },
    loadProducts(state) {
      if (localStorage.getItem(SAVED_PRODUCTS)) {
        const savedItems: State = JSON.parse(
          localStorage.getItem(SAVED_PRODUCTS)!,
        );
        if (savedItems) {
          state = [...savedItems];
        }
        return state;
      }
    },
  },
});

export const { addToCart, removeToCart, loadProducts } = cartSlice.actions;
export default cartSlice.reducer;
