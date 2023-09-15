import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";
import filterReducer from "./filterSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const reducers = combineReducers({
  todos: todosReducer,
  filters: filterReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todos", "filters"],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
