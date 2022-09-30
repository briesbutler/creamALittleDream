import { Link } from "react-router-dom";
import Icon from "../assets/img/ice-cream.png";
import Cart from "../assets/img/cart.png";
import "../assets/style.css";
import { signOut } from "../reducks/users/operations";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";

function Navbar({ handleLoginClick }) {
  const dispatch = useDispatch();
  const key = localStorage.getItem("WD_FORUM_LOGIN_USER_KEY");
  const [checkUser, setCheckUser] = useState(false);

  const signOutButton = () => {
    dispatch(signOut());
    setCheckUser(false);
    dispatch({ handleClick });
  };

  useEffect(() => {
    if (key != null) {
      setCheckUser(true);
    }
  }, [key]);
  const handleClick = () => {
    handleLoginClick();
  };

  return (
    <div className="navbar">
      <div className="home-section">
        <Link className="home-link" to="/">
          Cream Feast
        </Link>
        <Link className="icecream-link" to="/">
          <img className="icecream-icon" src={Icon} />
        </Link>
      </div>
      <div className="signinspot">
        {checkUser ? (
          <span className="loginicon" onClick={signOutButton}>
            Logout
          </span>
        ) : (
          <span className="signinicon" onClick={handleClick}>
            {/* <a href="/Signin" class="sign"> */}
            Sign In
            {/* </a> */}
          </span>
        )}
        {checkUser && (
          <a href="/cart">
            <img className="cart-icon" src={Cart} />
          </a>
        )}
        {/* <span className="loginicon" onClick={handleClick}>
          {`${!user ? "Sign In" : `Welcome, {user.username}!`}`}
        </span>
        <Link to="/cart">
          <img className="cart-icon" src={Cart} />
        </Link> */}
      </div>
    </div>
  );
}

export default Navbar;
