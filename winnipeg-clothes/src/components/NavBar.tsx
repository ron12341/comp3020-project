import React, { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";
import { useCart } from "../contexts/CartProvider";
import { Link } from "react-router-dom";
import NotificationCartItem from "./NotificationCartItem";
import { useCartNotification } from "../contexts/CartNotificationProvider";
import HoverCartList from "./HoverCartList";

const NavBar: React.FC = () => {
  const { cart, latestItem } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { showNotification, handleHideNotification } = useCartNotification();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <p className="logo-text">Winnipeg Clothes</p>
        </div>
        <div className="navbar-btns-container">
          <div className="heart-btn-container">
            <button className="heart-btn">
              <img src="/images/icons/heart-icon.webp" alt="Heart Icon" />
            </button>
            <div className="error-msg-container">
              <p className="error-msg"> Coming Soon! </p>
            </div>
          </div>
          <div className="cart-btn-container">
            <Link to="/cart">
              <button className="cart-btn">
                <img src="/images/icons/cart-icon.svg" alt="Cart Icon" />
              </button>
            </Link>

            <div className="notif-cart-container">
              {showNotification && cart.length > 0 && (
                <NotificationCartItem
                  item={latestItem} // Show the latest added item
                  isVisible={showNotification}
                  onHide={handleHideNotification}
                />
              )}
            </div>

            <div className="hover-cart-container">
              <HoverCartList cart={cart} />
            </div>
          </div>
        </div>
      </nav>
      <div className={`side-menu ${isMenuOpen ? "open" : "closed"}`}>
        <button className="close-menu" onClick={toggleMenu}>
          ✖
        </button>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/customize" onClick={toggleMenu}>
              Customize Clothes
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/#technology" onClick={toggleMenu}>
              Technology
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
