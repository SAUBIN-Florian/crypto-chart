import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  global: {},
  topSeven: [],
  query: {}
}

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    addGlobal: (state, action) => {
      state.global = action.payload;
    }
  }
})

export const { addGlobal } = cryptoSlice.actions;
export default cryptoSlice.reducer;