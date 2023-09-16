import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import shoppingSlice from "./component/Shopping/shoppingSlice";
import memoSlice from "./component/Memo/memoSlice";

const reducers = combineReducers({
  shopping: shoppingSlice.reducer,
  memo: memoSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["shopping", "memo"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
