import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./reducers/cryptoReducer";
import menuReducer from "./reducers/menuReducer";

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    menu: menuReducer
  }
})

export default store;