import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoListPage from "./pages/ToDoListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
