import React, { useState } from "react";
import { CartItem } from "../interfaces/CartItem";

import "./CartItemCard.css";

interface CartItemCardProps {
  item: CartItem;
  onChangeQuantity: (item: CartItem, newQuantity: number) => void;
  onRemove: (item: CartItem) => void;
}

const CartItemCard: React.FC<CartItemCardProps> = ({
  item,
  onChangeQuantity,
  onRemove,
}) => {
  const [inputValue, setInputValue] = useState<string>(
    item.quantity.toString()
  );

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    setInputValue(inputValue);
  };

  const handleBlur = () => {
    // On blur, if the input is empty, reset to the item's current quantity

    if (inputValue !== "" && !isNaN(Number(inputValue))) {
      const newQuantity = Number(inputValue);

      onChangeQuantity(item, newQuantity);
    }

    if (inputValue === "" || inputValue === "0") {
      setInputValue(item.quantity.toString());
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
            value={inputValue}
            onChange={handleQuantityChange}
            className="quantity-input"
            onBlur={handleBlur}
          />
          <button onClick={() => onRemove(item)} className="remove-btn">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
