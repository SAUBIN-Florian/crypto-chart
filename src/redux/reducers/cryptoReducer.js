import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  global: {},
  firstHundred: [],
  topSeven: [],
  query: []
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
    },
    setQuery: (state, action) => {
      for(let i = 2; i <= 43; i += 6){
        action.payload[i][0] = new Date(action.payload[i][0]).toLocaleDateString()
        state.query.push(action.payload[i])
      }
    }
  }
})

export const { addGlobal, addFirstHundred, setQuery } = cryptoSlice.actions;
export default cryptoSlice.reducer;