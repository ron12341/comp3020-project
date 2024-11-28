import { Routes, Route } from "react-router-dom";
import CustomizePage from "./CustomizePage";
import { CartProvider } from "./contexts/CartProvider";
import CartPage from "./CartPage";
import HomePage from "./HomePage";
import { CartNotificationProvider } from "./contexts/CartNotificationProvider";

function App() {
  return (
    <CartNotificationProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/customize" element={<CustomizePage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Routes>
      </CartProvider>
    </CartNotificationProvider>
  );
}

export default App;
