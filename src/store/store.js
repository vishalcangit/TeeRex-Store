import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsSlice from "./productsSlice";

export const store = configureStore({
  reducer: {
    product: productsSlice,
    cart: cartSlice,
  },
});
