import "./NotificationCartItem.css";
import { CartItem } from "../objects/CartItem";
import React, { useEffect, useState } from "react";

interface CartItemCardProps {
  item: CartItem;
  isVisible: boolean; // New prop to control visibility
  onHide: () => void; // Callback to hide the card
}

const NotificationCartItem: React.FC<CartItemCardProps> = ({
  item,
  isVisible,
  onHide,
}) => {
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
        onHide(); // Notify parent to remove the notification
      }, 3000); // 3 seconds

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [isVisible, onHide]);

  if (!visible) return null;

  return (
    <div className="notif-cart-item">
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
      </div>
    </div>
  );
};

export default NotificationCartItem;
