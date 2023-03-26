import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/types";

type cartState = {
  selectedItems: Product[];
  itemsCounter: number;
  deliveryCharge: number;
  total: number;
  checkOut: Boolean;
};

const initialState: cartState = {
  selectedItems: [],
  itemsCounter: 0,
  deliveryCharge: 1000,
  total: 0,
  checkOut: false,
};

const sumItems = (items: Product[]) => {
  const itemsCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = items
    .reduce((total, product) => total + +product.price * product.quantity, 0)
    .toFixed(2);
  return { itemsCounter, total };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const productItem = state.selectedItems.find(
        (item) => item.id === action.payload.id
      );
      if (!productItem) {
        state.selectedItems.push({
          ...action.payload,
          checkout: false,
          quantity: 1,
        });
        const counter = sumItems(state.selectedItems);
        state.itemsCounter = counter.itemsCounter;
        state.total = +counter.total;
      }
    },
    removeFromCart(state, action) {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = [...newSelectedItems];
      const counter = sumItems(state.selectedItems);
      state.itemsCounter = counter.itemsCounter;
      state.total = +counter.total;
      console.log(state.selectedItems);
    },
    increase(state, action) {
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      const counter = sumItems(state.selectedItems);
      state.total = +counter.total;
    },
    decrease(state, action) {
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.selectedItems[indexI].quantity === 1) return;
      state.selectedItems[indexI].quantity--;
      const counter = sumItems(state.selectedItems);
      state.total = +counter.total;
    },
    checkout(state) {
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.total = 0;
      state.checkOut = true;
    },
    clearCart(state) {
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.total = 0;
      state.checkOut = false;
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  increase,
  decrease,
  clearCart,
  checkout,
} = cartSlice.actions;
export default cartSlice.reducer;
