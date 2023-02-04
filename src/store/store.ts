import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import favoriteReducer from './reducers/favoriteReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoriteReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
