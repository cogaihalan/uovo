import { configureStore } from "@reduxjs/toolkit";
import  NavbarReducer  from "./redux/reducers/NavbarReducers";
export const store = configureStore({
  reducer: {
    navbar: NavbarReducer,
  },
});
