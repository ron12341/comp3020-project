import React, { useState } from "react";
import CartItemCard from "./components/CartItemCard";
import NavBar from "./components/NavBar";
import PopupConfirmation from "./components/PopupConfirmation"; // Import PopupConfirmation

import "./CartPage.css";
import { useCart } from "./contexts/CartProvider";
import { CartItem } from "./objects/CartItem";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, changeQuantity } = useCart();
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [itemToConfirmRemove, setItemToConfirmRemove] =
    useState<CartItem | null>(null);

  // Handle quantity change for each cart item
  const handleQuantityChange = (
    itemToChange: CartItem,
    newQuantity: number
  ) => {
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
          <h2>Cart Items</h2>
          {cart.length > 0 ? (
            cart.map((item) => (
              <CartItemCard
                key={`${item.name}-${item.size}-${item.color}`}
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
          <ul className="order-summary-list">
            {cart.map((item) => (
              <li
                key={`${item.name}-${item.size}`}
                className="order-summary-item"
              >
                <div className="item-details">
                  <span>{item.name}</span>
                  <span>Size: {item.size}</span>
                  <span>Quantity: {item.quantity}</span>
                </div>
                <span className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <p className="order-summary-total">Total: ${totalValue.toFixed(2)}</p>
        </div>
      </div>

      {/* PopupConfirmation Component */}
      <PopupConfirmation
        message={`Do you want to remove "${itemToConfirmRemove?.name}" from your cart?`}
        onConfirm={handleConfirmRemove}
        onCancel={handleCancelRemove}
        isVisible={isPopupVisible}
      />
    </div>
  );
};

export default CartPage;
