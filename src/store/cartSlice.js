import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const productAction = productSlice.actions;
export default productSlice.reducer;
