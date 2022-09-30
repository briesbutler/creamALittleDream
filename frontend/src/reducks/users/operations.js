import API from "../../API";
import { signInAction, signUpAction, signOutAction } from "./actions";
import { push } from "redux-first-history";

const api = new API();
const LOGIN_USER_KEY = "WD_FORUM_LOGIN_USER_KEY";

export const fetchUserFromLocalStorage = () => {
  return async (dispatch) => {
    const userJSON = localStorage.getItem(LOGIN_USER_KEY);
    if (userJSON && userJSON.token !== "") {
      dispatch(signInAction(JSON.parse(userJSON)));
    }
  };
};

export const signUp = (username, email, password1, password2) => {
  return async (dispatch) => {
    // Validation
    if (
      username === "" ||
      email === "" ||
      password1 === "" ||
      password2 === ""
    ) {
      alert("Please fill out name, email, and password.");
      return false;
    }

    return api
      .signUp(username, email, password1, password2)
      .then((user) => {
        dispatch(signUpAction(user));
        localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(user));
        dispatch(push("/"));
      })
      .catch((error) => {
        alert("Failed to connect API to add a user");
        console.log(error);
      });
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    // Validation
    if (email === "" || password === "") {
      alert("Please fill out username, email and password.");
      return false;
    }

    return api
      .signIn(email, password)
      .then((user) => {
        dispatch(signInAction(user));
        localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(user));
        dispatch(push("/"));
      })
      .catch((error) => {
        alert("Failed to connect API to signin a user");
        console.log(error);
      });
  };
};

export const signOut = () => {
  return async (dispatch) => {
    dispatch(signOutAction());
    localStorage.removeItem(LOGIN_USER_KEY);
    dispatch(push("/signin"));
  };
};
