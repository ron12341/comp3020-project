import "./NavBar.css";
import logo from "../assets/logo.png";
import { useCart } from "../contexts/CartContext";

function NavBar() {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#">Home</a>
      </div>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <p className="logo-text">Winnipeg Clothes</p>
      </div>
      <button className="cart-btn">
        🛒 Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
      </button>
    </nav>
  );
}

export default NavBar;
