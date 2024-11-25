import { Link } from "react-router-dom";
import { CartItem } from "../objects/CartItem";
import HoverCartCard from "./HoverCartCard";

import "./HoverCartList.css";

const HoverCartList = ({ cart }: { cart: CartItem[] }) => {
  const totalValue = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="hover-cart-list">
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((item) => (
            <HoverCartCard key={`${item.name}-${item.size}`} item={item} />
          ))
        ) : (
          <p className="empty-cart-message">Your cart is empty!</p>
        )}
      </div>

      <div className="total-price-container">
        <p className="label">TOTAL</p>
        <p className="total-price">${totalValue.toFixed(2)}</p>
      </div>

      <div className="buttons-container">
        <button className="checkout-button">CHECKOUT</button>

        <Link to="/cart">
            <button className="bag-button">SHOPPING BAG</button>
        </Link>
      </div>
    </div>
  );
};

export default HoverCartList;
