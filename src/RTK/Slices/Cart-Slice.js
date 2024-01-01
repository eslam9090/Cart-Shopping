import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cartslice",
  initialState: { cartState: [], isOpen: false },
  reducers: {
    Open: (state) => {
      state.isOpen = !state.isOpen;
    },
    AddToCart: (state, action) => {
      const findedproduct = state.cartState.find(
        (product) => product.id === action.payload.id
      );
      if (findedproduct) {
        findedproduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.cartState.push(productClone);
      }
    },
    RemoveFromCart: (state, action) => {
      state.cartState = state.cartState.filter(
        (p) => p.id !== action.payload.id
      );
      console.log(action.payload);
    },
    ClearFromCart: (state, action) => {
      state.cartState = [];
    },
  },
});

export default CartSlice.reducer;
export const { Open, AddToCart, RemoveFromCart, ClearFromCart } =
  CartSlice.actions;
