import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  global: {},
  firstHundred: [],
  topSeven: [],
  query: {}
}

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    addGlobal: (state, action) => {
      state.global = action.payload;
    },
    addFirstHundred: (state, action) => {
      state.firstHundred = action.payload;
    }
  }
})

export const { addGlobal, addFirstHundred } = cryptoSlice.actions;
export default cryptoSlice.reducer;