import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/Product-Slice";
import CartSlice from "./Slices/Cart-Slice";

export const store = configureStore({
  reducer: {
    productts: productSlice,
    cart: CartSlice,
  },
});
