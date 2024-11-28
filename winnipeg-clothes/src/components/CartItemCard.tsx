import React, { useState } from "react";

import "./CartItemCard.css";
import { CartItem } from "../objects/CartItem";

interface CartItemCardProps {
  item: CartItem;
  isFunctional?: boolean;
  onChangeQuantity: (item: CartItem, newQuantity: number) => void;
  onRemove: (item: CartItem) => void;
}

const CartItemCard: React.FC<CartItemCardProps> = ({
  item,
  isFunctional = true,
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
        <span className="item-description item-price">${item.price}</span>
        <div className="item-details-details-container">
          <div className="item-details-details">
            <div className="labels">
              <p>Colour </p>
              <p>Size </p>
              <p>Quantity </p>
            </div>
            <div className="values">
              <p>{item.color} </p>
              <p>{item.size} </p>
              <p>{item.quantity} </p>
            </div>
          </div>
          <p className="total-item-price">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
        <div className={`item-controls ${isFunctional ? "" : "disabled"}`}>
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
