import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart(state, action) {
      state.cartItems = action.payload;
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
