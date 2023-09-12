import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import storageSession from "redux-persist/lib/storage/session";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  counter: counterSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["counter"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
