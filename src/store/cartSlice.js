import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],

  reducers: {
    addToCart(state, action) {
      // localStorage.setItem("cartItems", JSON.stringify(state));
      state.push(action.payload);
    },

    removeFromCart(state, action) {
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.filter((item) => item.id !== action.payload))
      );
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
