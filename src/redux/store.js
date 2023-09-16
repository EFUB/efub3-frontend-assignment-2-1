import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import toDoSlice from "./toDoSlice";
import colorSlice from "./colorSlice";

const reducers = combineReducers({
  toDo: toDoSlice.reducer,
  color: colorSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["toDo", "color"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
