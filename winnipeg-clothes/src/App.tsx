import { Routes, Route } from "react-router-dom";
import CustomizePage from "./CustomizePage";
import DesignPage from "./DesignPage";
import { CartProvider } from "./contexts/CartContext";
import CartPage from "./CartPage";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/customize" element={<CustomizePage />}></Route>
      </Routes>
      {/* <CustomizePage /> */}
      {/* <CartPage /> */}
    </CartProvider>
  );
}

export default App;
