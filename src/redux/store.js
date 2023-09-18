import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { diarySlice } from "./diarySlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { weatherSlice } from "./weatherSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const reducers = combineReducers({
  diary: diarySlice.reducer,
  weather: weatherSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export let persistor = persistStore(store);

export default store;
