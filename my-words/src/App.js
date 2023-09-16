import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import store from "./store";
import Home from "./routes/Home";
import AddWord from "./routes/AddWord";

export let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addword" element={<AddWord />}></Route>
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
