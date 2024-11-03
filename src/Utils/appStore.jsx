import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
// configurerStore comes from ReduxBuilt first we setup this
// then we setup the Provide this store to the application for that we need go to app.js
//now we need to add the Provider to build the connection with the application
//add slice to the store

export default appStore;
