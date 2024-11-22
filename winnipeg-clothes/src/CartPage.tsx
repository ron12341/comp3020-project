import React from "react";
import CartItemCard from "./components/CartItemCard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./CartPage.css";
import { useCart } from "./contexts/CartContext";
import { CartItem } from "./interfaces/CartItem";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, addToCart } = useCart();

  const handleQuantityChange = (
    itemToChange: CartItem,
    newQuantity: number
  ) => {
    console.log("Quantity changed:", newQuantity);
    if (newQuantity <= 0) {
      const confirmRemove = window.confirm(
        `Quantity of "${itemToChange.name}" is 0. Do you want to remove this item from your cart?`
      );
      if (confirmRemove) {
        removeFromCart(itemToChange);
      }
      return;
    }

    addToCart({
      ...itemToChange,
      quantity: newQuantity - itemToChange.quantity,
    });
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
                key={item.name}
                item={item}
                onChangeQuantity={handleQuantityChange}
                onRemove={removeFromCart}
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
      <Footer />
    </div>
  );
};

export default CartPage;
