import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import store from "./store";
import { counterSlice, asyncUpFetch } from "./counterSlice";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const status = useSelector((state) => {
    return state.counter.status;
  });

  return (
    <div>
      <button
        onClick={() => {
          dispatch(asyncUpFetch());
        }}
      >
        +async fetch
      </button>
      {count} | {status}
    </div>
  );
}

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Counter></Counter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
