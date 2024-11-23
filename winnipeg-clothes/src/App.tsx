import { Routes, Route } from "react-router-dom";
import CustomizePage from "./CustomizePage";
import { CartProvider } from "./contexts/CartContext";
import CartPage from "./CartPage";
import CartItemCard from "./components/CartItemCard";
import DesignPage from "./DesignPage";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/customize" element={<CustomizePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
      <DesignPage />
      
    </CartProvider>
  );
}

export default App;
