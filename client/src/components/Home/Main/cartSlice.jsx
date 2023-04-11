import { createSlice } from "@reduxjs/toolkit";
import * as Toastify from "../../Toastify/Toast";

const initialState = {
  status: "idle",
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload.book;
      const quantity = action.payload.quantity;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
        return Toastify.successNotify("Cập nhật giỏ hàng thành công");
      } else {
        action.payload.book.quantity = quantity;
        state.cart.push(action.payload.book);
        return Toastify.successNotify("Thêm vào giỏ hàng thành công");
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        return Toastify.successNotify("Cập nhật giỏ hàng thành công");
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity -= 1;
        return Toastify.successNotify("Cập nhật giỏ hàng thành công");
      }
    },
  },
});
export const { addToCart, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
