import React, { useState } from "react";
import CartItemCard from "./components/CartItemCard";

interface CartItem {
  id: string;
  image: string;
  description: string;
  size: string;
  quantity: number;
  price: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      image: "/path/to/image1.jpg",
      description: "T-shirt",
      size: "M",
      quantity: 2,
      price: 20.0,
    },
    {
      id: "2",
      image: "/path/to/image2.jpg",
      description: "Hoodie",
      size: "L",
      quantity: 1,
      price: 40.0,
    },
  ]);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalValue = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItemCard
            key={item.id}
            item={item}
            onChangeQuantity={handleQuantityChange}
            onRemove={handleRemoveItem}
          />
        ))}
      </div>
      <div className="cart-summary">
        <h2>Order Summary</h2>
        <p>Total: ${totalValue.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartPage;
