import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      console.log(state.products);
    },
  },
});

export const productAction = productSlice.actions;
export default productSlice.reducer;
