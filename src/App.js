import React from "react";
import { Routes, Route } from "react-router-dom";
import ShoppingPage from "./page/ShoppingPage";
import MemoPage from "./page/MemoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShoppingPage />} />
        <Route path="/memo" element={<MemoPage />} />
      </Routes>
    </>
  );
}

export default App;
