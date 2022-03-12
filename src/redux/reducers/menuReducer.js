import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: ""
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    selectedMenu: (state, action) => {
      state.active = action.payload
    }
  }
})

export const { selectedMenu } = menuSlice.actions;
export default menuSlice.reducer;