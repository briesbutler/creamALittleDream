// import React from "react";
// import { Link } from "react-router-dom";
// import Icon from "../assets/img/ice-cream.png";
// import Cart from "../assets/img/cart.png";
// import "../assets/style.css";

// function Navbar({ handleLoginClick, user }) {
//   const handleClick = () => {
//     handleLoginClick();
//   };

//   return (
//     <div className="navbar">
//       <div className="home-section">
//         <Link className="home-link" to="/">
//           Cream Feast
//         </Link>
//         <Link className="icecream-link" to="/">
//           <img className="icecream-icon" src={Icon} />
//         </Link>
//       </div>
//       <div>
//         <span className="loginicon" onClick={handleClick}>
//           {`${!user ? "Sign In" : `Welcome, {user.username}!`}`}
//         </span>
//         <Link to="/cart">
//           <img className="cart-icon" src={Cart} />
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
