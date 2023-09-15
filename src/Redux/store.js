import { combineReducers, configureStore } from "@reduxjs/toolkit";
import optionSlice from "./optionSlice";
import cartSlice from "./cartSlice";

import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const reducers = combineReducers({
  option: optionSlice.reducer,
  cart: cartSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["option", "cart"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
