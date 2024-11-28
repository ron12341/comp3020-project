import "./NotificationCartItem.css";
import { CartItem } from "../objects/CartItem";

import "./HoverCartCard.css";

interface CartItemCardProps {
  item: CartItem;
}

const HoverCartCard: React.FC<CartItemCardProps> = ({
  item
}) => {

  return (
    <div className="hover-cart-item">
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

export default HoverCartCard;
