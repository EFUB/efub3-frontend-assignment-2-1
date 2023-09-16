import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modeChangerSlice from "./modeChangerSlice";

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import weatherSlice from "./weatherSlice";
const reducers = combineReducers({
  modeChanger: modeChangerSlice.reducer,
  weather: weatherSlice.reducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitellist: ["modeChanger", "weather"],
  //blacklist:[]
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
});
export default store;
