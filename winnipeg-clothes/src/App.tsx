import { Routes, Route } from "react-router-dom";
import CustomizePage from "./CustomizePage";
import { CartProvider } from "./contexts/CartContext";
import CartPage from "./CartPage";
import CartItemCard from "./components/CartItemCard";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/customize" element={<CustomizePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
      <CustomizePage />
      
    </CartProvider>
  );
}

export default App;
