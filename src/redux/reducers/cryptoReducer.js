import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  global: {},
  firstHundred: [],
  topSeven: [],
  exchanges: [],
  markets: [],
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
      if(action.payload[0]){
        state.query = [];
        for(let i = 2; i <= 43; i += 6){
          action.payload[i][0] = new Date(action.payload[i][0]).toLocaleDateString()
          state.query.push(action.payload[i])
        }
      }
      return;
    },
    addExchanges: (state, action) => {
      state.exchanges = action.payload
    },
    addMarkets: (state, action) => {
      state.markets = action.payload
    }
  }
})

export const { addGlobal, addFirstHundred, setQuery, addExchanges, addMarkets } = cryptoSlice.actions;
export default cryptoSlice.reducer;