import ShoppingList from "./pages/ShoppingList";
import { Route, Routes } from "react-router-dom";
import store from "./Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import Cart from "./pages/Cart";

function App() {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes>
          <Route path="/" element={<ShoppingList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
