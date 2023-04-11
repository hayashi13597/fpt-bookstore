import { combineReducers } from "redux";
import searchSlice from "@/components/Home/Header/searchSlice";
import loginSlice from "@/pages/auth/login/loginSlice";

const rootReducer = combineReducers({
  search: searchSlice.reducer,
  login: loginSlice.reducer,
});

export default rootReducer;
