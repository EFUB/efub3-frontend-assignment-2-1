import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import NavBar from "./components/NavBar";
import DiaryEditPage from "./pages/DiaryEditPage";
import SearchPage from "./pages/WeatherPage";
import store, { persistor } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavBar />
        <Routes>
          <Route path="diary-edit" element={<DiaryEditPage />}></Route>
          <Route path="search" element={<SearchPage />}></Route>
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
