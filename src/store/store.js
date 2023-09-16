import { userSlice } from "./userSlice";
import { selectSlice } from "./selectSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// persist
const persistConfig = {
	key: "root",
	storage,
	whitelist: [`user`, `select`],
	// blacklist: [],
};
const reducers = combineReducers({
	user: userSlice.reducer,
	select: selectSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
	reducer: persistedReducer,
});
export let persistor = persistStore(store);
