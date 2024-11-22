import React from "react";
import { CartItem } from "../interfaces/CartItem";

import "./CartItemCard.css";

interface CartItemCardProps {
  item: CartItem;
  onChangeQuantity: (item: CartItem, newQuantity: number) => void;
  onRemove: (item: CartItem) => void;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item, onChangeQuantity, onRemove }) => {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value);
    if (newQuantity === 0) {
      onRemove(item);
    } else {
      onChangeQuantity(item, newQuantity);
    }
  };

  return (
    <div className="cart-item-card">
      <img src={item.image} alt={item.description} className="item-image" />
      <div className="item-details">
        <p className="item-description">{item.description}</p>
        <p className="item-size">Size: {item.size}</p>
        <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
        <div className="item-controls">
          <input
            type="number"
            min="0"
            value={item.quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
          />
          <button onClick={() => onRemove(item)} className="remove-btn">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
