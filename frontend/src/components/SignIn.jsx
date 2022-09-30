import React, { useState } from "react";
import Icon from "../assets/img/ice-cream.png";
import "../assets/style.css";
import { useDispatch } from "react-redux";
import { signIn } from "../reducks/users/operations";
import { push } from "redux-first-history";

const LoginForm = ({ isShowLogin, handleSignUpClick, handleLoginClick }) => {
  // const dispatch = useDispatch();
  // const initialValues = { email: "", password: "" };
  // const [values, setValues] = useState(initialValues);
  // const [isLoading, setIsLoading] = useState(false);

  // const handleInputChange = (e) => {
  // const { name, value } = e.target;
  // setValues({ ...values, [name]: value });
  // };

  //   const loginUserButton = async () => {
  //     if (!values.email.trim() || !values.password.trim()) {
  //       alert(`Please fill out all required form.`);
  //       return;
  //     }
  //     setIsLoading(true);

  //     await dispatch(
  //       loginUser({
  //         email: values.email,
  //         password: values.password,
  //       })
  //     );

  //     setIsLoading(false);
  //     setValues({ email: "", password: "" });
  //   };

  const handleClick = () => {
    handleLoginClick();
    handleSignUpClick();
  };
  const handleClose = () => {
    handleLoginClick();
  };

  // const [resp, changeResponse] = useState(null);
  // const [username, changeUsername] = useState("");
  // const [password, changePassword] = useState("");

  // function onSubmit(e) {
  //   e.preventDefault();
  //   return fetch("http://localhost:8000/dj-rest-auth/login/", {
  //     method: "POST",
  //     credentials: "omit",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({ username, password }),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       changeResponse(data);
  //     })
  //     .catch((error) => console.log("error ->", error));
  // }

  const dispatch = useDispatch();

  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  const signInButton = () => {
    dispatch(signIn(email, password));
    setEmail("");
    setPassword("");
    handleLoginClick();
  };

  return (
    <div className={`${!isShowLogin ? "active" : ""} show`}>
      {/* <div>
        {resp && (
          <div className={"response"}>
            <code>{JSON.stringify(resp)}</code>
          </div>
        )}
      </div> */}
      <div className="login-form">
        <div className="form-box solid">
          {/* <form onSubmit={onSubmit} className="form-signin"> */}
          <div className="signin-title">
            <h1 className="login-app-text">Cream Feast</h1>
            <img className="login-icecream-icon" src={Icon} />
          </div>
          <div className="signin-close">
            <span className="loginicon" onClick={handleClose}>
              X
            </span>
          </div>
          <div className="signin-content1">
            <h2 className="login-text">SIGN IN</h2>
          </div>
          <div className="signin-content2">
            <input
              placeholder="Email"
              required
              onChange={inputEmail}
              value={email}
              type="email"
              className="login-box"
            />
          </div>
          <div className="signin-content3">
            <input
              placeholder="Password"
              required
              onChange={inputPassword}
              value={password}
              type="password"
              className="login-box"
            />
          </div>
          <div className="signin-content4">
            <button
              // type={"submit"}
              value="SIGN IN"
              className="login-btn"
              onClick={signInButton}
            >
              SIGN IN
              {/* {isLoading ? "Loading..." : "SIGN IN"} */}
            </button>
          </div>
          <div className="signin-content5">
            <p className="q">Not a Member?</p>
            <span className="loginlink" onClick={handleClick}>
              Join Us
            </span>
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
