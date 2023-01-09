/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ApiResponse } from '../../interface/apiInterface';

export type State = {
  data: ApiResponse[];
};
export type CartItem = ApiResponse & {
  quantity: number;
};

interface Props {
  value: number;
  id: number;
}

const initialState: State | void = {
  data: [],
};

const SAVED_PRODUCTS = 'savedItems';

export const cartSlice = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const item = action.payload;

      if (state.data.some(i => i.id == item.id)) {
        return;
      }

      state.data.push(item);
      localStorage.setItem(SAVED_PRODUCTS, JSON.stringify(state.data));
      return state;
    },
    updateCartItem(state, action: PayloadAction<Props>) {
      const id = action.payload.id;
      const value = action.payload.value;

      state.data.map((item: any) => {
        if (item.id == id) {
          item.quantity = value;
        }
      });

      localStorage.setItem(SAVED_PRODUCTS, JSON.stringify(state.data));
      return state;
    },
    removeToCart(state, action: PayloadAction<number>) {
      state.data = state.data.filter(items => items.id != action.payload);
      localStorage.setItem(SAVED_PRODUCTS, JSON.stringify(state.data));
      return state;
    },
    loadProducts(state) {
      if (localStorage.getItem(SAVED_PRODUCTS)) {
        const savedItems: ApiResponse[] = JSON.parse(
          localStorage.getItem(SAVED_PRODUCTS)!,
        );
        if (savedItems) {
          state.data = [...savedItems];
        }
        return state;
      }
    },
  },
});

export const { addToCart, removeToCart, loadProducts, updateCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
