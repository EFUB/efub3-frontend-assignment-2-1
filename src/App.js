import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import SelectedListPage from "./pages/SelectedListPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<ListPage />} />
			<Route path="/selected" element={<SelectedListPage />} />
		</Routes>
	);
}
export default App;
