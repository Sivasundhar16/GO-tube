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
  },
});

export default appSlice.reducer;
export const { toggleMenu } = appSlice.actions;
