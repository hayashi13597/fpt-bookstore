import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "@/components/Home/Header/searchSlice";
import loginSlice from "@/pages/auth/login/loginSlice";
import cartSlice from "../components/Home/Main/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import authSlice from "../slice/authSlice";
import paymentSlice from "../pages/Cart/paymentSlice";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartSlice);

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    auth: loginSlice.reducer,
    cart: persistedReducer,
    authLogin: authSlice,
    payment: paymentSlice,
  },
  middleware: [thunk],
});
export const persistor = persistStore(store);
export default store;
