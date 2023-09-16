import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import wordSlice from "./slices/wordSlice";
import repeatSlice from "./slices/repeatSlice";

// Redux-persist 구현
const reducers = combineReducers({
  modifyList: wordSlice.reducer,
  repeatWord: repeatSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["modifyList", "repeatWord"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
