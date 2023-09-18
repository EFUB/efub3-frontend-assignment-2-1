import { styled } from "styled-components";
import ModePage from "./pages/ModePage";
import { Provider } from "react-redux";
import React from "react";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import WeatherPage from "./pages/WeatherPage";
import { Route, Routes } from "react-router-dom";
function App() {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/mode" element={<ModePage />}></Route>
          <Route path="/" element={<WeatherPage />}></Route>
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
