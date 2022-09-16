import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabActive: 1,
};

const NavbarReducer = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    changeTabActive: (state) => {
      state.tabActive += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTabActive } = NavbarReducer.actions;

export default NavbarReducer.reducer;
