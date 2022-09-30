import React, { useEffect, useState } from "react";
import "./assets/style.css";
import Router from "./Router";
import { Footer } from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserFromLocalStorage } from "./reducks/users/operations";

let pageUrl = window.location.toString();

function App() {
  const [showFooter, setShowFooter] = useState(true);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  // const subtotal = getSubtotal(selector);

  useEffect(() => {
    if (pageUrl.includes("Shipping") || pageUrl.includes("Thankyou")) {
      setShowFooter(false);
    }
    dispatch(fetchUserFromLocalStorage());
  }, []);

  // const [isShowLogin, setIsShowLogin] = useState(false);
  // const handleLoginClick = () => {
  //   setIsShowLogin((isShowLogin) => !isShowLogin);
  // };

  // const [isShowSignUp, setIsShowSignUp] = useState(false);
  // const handleSignUpClick = () => {
  //   setIsShowSignUp((isShowSignUp) => !isShowSignUp);
  // };
  return (
    <>
      <Router />
      {showFooter && (
        <Footer
        // price={subtotal}
        />
      )}
    </>
  );
}

export default App;
