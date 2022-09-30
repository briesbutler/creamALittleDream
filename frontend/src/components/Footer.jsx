import { Link } from "react-router-dom";
import Icon from "../assets/img/ice-cream.png";
import Cart from "../assets/img/cart.png";
import "../assets/style.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="info">
        <p className="subtotal">Subtotal:</p>
        <button className="check_cart">Check your Cart</button>
      </div>
    </div>
  );
};
