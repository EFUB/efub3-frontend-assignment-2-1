import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import toDoSlice from "./toDoSlice";

const reducers = combineReducers({
  toDo: toDoSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["toDo"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
