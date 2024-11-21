import './NavBar.css';
import logo from '../assets/logo.png';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#">Home</a>
      </div>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <p className="logo-text">Winnipeg Clothes</p>
      </div>
      <button className="cart-btn">Cart</button>
    </nav>
  );
}

export default NavBar;
