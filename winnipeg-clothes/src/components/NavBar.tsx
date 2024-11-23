import React, { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰ Menu
        </button>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <p className="logo-text">Winnipeg Clothes</p>
        </div>
        <Link to="/cart">
          <button className="cart-btn">
            🛒 Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
          </button>
        </Link>
      </nav>
      <div className={`side-menu ${isMenuOpen ? "open" : "closed"}`}>
        <button className="close-menu" onClick={toggleMenu}>
          ✖
        </button>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>About Us</Link>
          </li>
          <li>
            <Link to="/products" onClick={toggleMenu}>Products</Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
          <li>
            <Link to="/#technology" onClick={toggleMenu}>Technology</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
