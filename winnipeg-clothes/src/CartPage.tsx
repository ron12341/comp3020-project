import React, { useState } from "react";
import CartItemCard from "./components/CartItemCard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PopupConfirmation from "./components/PopupConfirmation"; // Import PopupConfirmation

import "./CartPage.css";
import { useCart } from "./contexts/CartContext";
import { CartItem } from "./objects/CartItem";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, changeQuantity } = useCart();
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [itemToConfirmRemove, setItemToConfirmRemove] = useState<CartItem | null>(null);

  // Handle quantity change for each cart item
  const handleQuantityChange = (itemToChange: CartItem, newQuantity: number) => {
    console.log("Quantity changed:", newQuantity);

    console.log(newQuantity);

    if (newQuantity <= 0) {
      setItemToConfirmRemove(itemToChange); 
      setPopupVisible(true);
      return;
    }

    changeQuantity(itemToChange, newQuantity);
  };

  const handleRemoveItem = (itemToRemove: CartItem) => {
    setItemToConfirmRemove(itemToRemove);
    setPopupVisible(true);
  };

  // Confirm removal of the item from the cart
  const handleConfirmRemove = () => {
    if (itemToConfirmRemove) {
      removeFromCart(itemToConfirmRemove); // Remove item from cart
    }
    setPopupVisible(false); // Close the popup
    setItemToConfirmRemove(null); // Clear item to be removed
  };

  // Cancel item removal
  const handleCancelRemove = () => {
    setPopupVisible(false); // Close the popup
    setItemToConfirmRemove(null); // Clear item to be removed
  };

  const totalValue = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="app">
      <NavBar />
      <div className="cart-page">
        <div className="cart-items">
          {cart.length > 0 ? (
            cart.map((item) => (
              <CartItemCard
                key={`${item.name}-${item.size}`}
                item={item}
                onChangeQuantity={handleQuantityChange}
                onRemove={handleRemoveItem}
              />
            ))
          ) : (
            <p className="empty-cart-message">Your cart is empty!</p>
          )}
        </div>
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <p>Total: ${totalValue.toFixed(2)}</p>
        </div>
      </div>

      {/* PopupConfirmation Component */}
      <PopupConfirmation
        message={`Quantity of "${itemToConfirmRemove?.name}" is 0. Do you want to remove this item from your cart?`}
        onConfirm={handleConfirmRemove}  
        onCancel={handleCancelRemove}    
        isVisible={isPopupVisible}     
      />

      <Footer />
    </div>
  );
};

export default CartPage;
