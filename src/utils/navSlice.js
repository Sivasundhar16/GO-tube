import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app", // Add this line to specify the slice name
  initialState: {
    isMenuopen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuopen = !state.isMenuopen;
    },
    closeMenu: (state) => {
      state.isMenuopen = false;
    },
  },
});

export default appSlice.reducer;
export const { toggleMenu, closeMenu } = appSlice.actions;
