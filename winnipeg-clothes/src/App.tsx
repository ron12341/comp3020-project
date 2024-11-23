import { Routes, Route } from "react-router-dom";
import CustomizePage from "./CustomizePage";
import { CartProvider } from "./contexts/CartContext";
import CartPage from "./CartPage";
import HomePage from "./HomePage";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/customize" element={<CustomizePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
      
    </CartProvider>
  );
}

export default App;
