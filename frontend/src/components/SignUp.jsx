import React, { useState } from "react";
import Icon from "../assets/img/ice-cream.png";
import "../assets/style.css";
import { useDispatch } from "react-redux";
import { signUp } from "../reducks/users/operations";

const SignUpForm = ({ isShowSignUp, handleLoginClick, handleSignUpClick }) => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [password1, setPassword1] = useState(""),
    [password2, setPassword2] = useState("");

  const inputUserName = (event) => {
    setUserName(event.target.value);
  };
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };
  const inputPassword1 = (event) => {
    setPassword1(event.target.value);
  };
  const inputPassword2 = (event) => {
    setPassword2(event.target.value);
  };
  const signUpButton = () => {
    dispatch(signUp(username, email, password1, password2));
    setUserName("");
    setEmail("");
    setPassword1("");
    setPassword2("");
    handleClose();
  };

  // const initialValues = {
  //   username: "",
  //   email: "",
  //   password1: "",
  //   password2: "",
  // };
  // const [values, setValues] = useState(initialValues);
  // const [isLoading, setIsLoading] = useState(false);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setValues({ ...values, [name]: value });
  // };

  // const addUserButton = async () => {
  //   if (
  //     !values.username.trim() ||
  //     !values.email.trim() ||
  //     !values.password1.trim() ||
  //     !values.password2.trim()
  //   ) {
  //     alert(`Please fill out all required form.`);
  //     return;
  //   }
  //   setIsLoading(true);

  //   // await dispatch(
  //   //   addUser({
  //   //     username: values.username,
  //   //     email: values.email,
  //   //     password1: values.password1,
  //   //     password2: values.password2,
  //   //   })
  //   // );

  //   setIsLoading(false);
  //   setValues({
  //     username: "",
  //     email: "",
  //     password1: "",
  //     password2: "",
  //   });
  // };

  const handleClick = () => {
    handleLoginClick();
    handleSignUpClick();
  };
  const handleClose = () => {
    handleSignUpClick();
  };
  // const [resp, changeResponse] = useState(null);
  // const [username, changeUsername] = useState("");
  // const [email, changeEmail] = useState("");
  // const [password1, changePassword1] = useState("");
  // const [password2, changePassword2] = useState("");

  // function onSubmit(e) {
  //   return fetch("http://localhost:8000/dj-rest-auth/registration/", {
  //     method: "POST",
  //     credentials: "omit",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({ username, email, password1, password2 }),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       changeResponse(data);
  //     })
  //     .catch((error) => console.log("error ->", error));
  // }

  return (
    <div className={`${!isShowSignUp ? "active" : ""} show`}>
      {/* <div>
        {resp && (
          <div className={"response"}>
            <code>{JSON.stringify(resp)}</code>
          </div>
        )}
      </div> */}
      <div className="signup-form">
        <div className="signup-form-box solid">
          {/* <form onSubmit={onSubmit} className="form-signup"> */}
          <div className="signup-title">
            <h1 className="signup-app-text">Cream Feast</h1>
            <img className="signup-icecream-icon" src={Icon} />
          </div>
          <div className="signup-close">
            <span className="signupicon" onClick={handleClose}>
              X
            </span>
          </div>
          <div className="signup-content1">
            <h2 className="signup-text">SIGN UP</h2>
          </div>
          <div className="signup-content2">
            <input
              onChange={inputUserName}
              value={username}
              type={"input"}
              name={"username"}
              placeholder="Username"
              required
              className="signup-box"
            />
            <br></br>
          </div>
          <div className="signup-content2">
            <input
              onChange={inputEmail}
              value={email}
              type={"input"}
              name={"email"}
              placeholder="Email"
              required
              className="signup-box"
            />
          </div>
          <div className="signup-content3">
            <input
              onChange={inputPassword1}
              value={password1}
              type={"password"}
              name={"password"}
              placeholder="Password"
              required
              className="signup-box"
            />
          </div>
          <div className="signup-content3">
            <input
              onChange={inputPassword2}
              value={password2}
              type={"password"}
              name={"password"}
              placeholder="Re-Enter Password"
              required
              className="signup-box"
            />
          </div>
          {/* <div className="signup-content3">
              <input
                onChange={(e) => changePassword2(e.target.value)}
                value={password2}
                type={"password"}
                name={"password2"}
                placeholder="Re-Enter Password"
                required
                className="signup-box"
              />
            </div> */}
          <div className="signup-content4">
            <button
              // type={"submit"}
              value="SIGN UP"
              className="signup-btn"
              onClick={signUpButton}
            >
              SIGN UP
              {/* {isLoading ? "Loading..." : "SIGN UP"} */}
            </button>
            <br></br>
          </div>
          <div className="signup-content5">
            <p className="q">
              Already a Member?
              <span className="signuplink" onClick={handleClick}>
                Sign In
              </span>
            </p>
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};
export default SignUpForm;
