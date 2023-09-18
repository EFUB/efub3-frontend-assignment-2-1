import { configureStore, combineReducers} from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import bookSlice from './bookSlice';
import contentSlice from './contentSlice'


const reducers = combineReducers({
  bookList: bookSlice.reducer,
  contentList: contentSlice.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['bookList','contentList']
}


const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer,
  });

  export default store;