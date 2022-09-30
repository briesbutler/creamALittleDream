import axios from "axios";

const LOGIN_USER_KEY = "WD_FORUM_LOGIN_USER_KEY";

var baseURL;
if (window.location.origin === "http://localhost:3000") {
  baseURL = "http://127.0.0.1:8000"; // development address
} else {
  baseURL = "https://creamaldream-backend.herokuapp.com/"; // production address
}
// if (
//   process.env.REACT_APP_ENVIRONMENT &&
//   process.env.REACT_APP_ENVIRONMENT === "PRODUCTION"
// ) {
//   baseURL = process.env.REACT_APP_API_BASE_URL;
// }
// } else {
//   baseURL = "http://127.0.0.1:8000";
// }

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */
api.interceptors.request.use(
  (config) => {
    if (config.requireToken && localStorage.getItem(LOGIN_USER_KEY)) {
      config.headers.common["Authorization"] = JSON.parse(
        localStorage.getItem(LOGIN_USER_KEY)
      ).token;
    }

    return config;
  },
  (err) => {
    console.error(err);
  }
);

export default class API {
  getItems = async (params) => {
    try {
      const response = await api.get("", { params });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  signUp = async (username, email, password1, password2) => {
    const savedPost = await api
      .post("/dj-rest-auth/registration/", {
        username: username,
        email: email,
        password1: password1,
        password2: password2,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedPost;
  };
  //   addPost = async (postBody) => {
  //     const formData = new FormData();

  //     for (const key in postBody) {
  //       formData.append(key, postBody[key]);
  //     }

  //     try {
  //       const response = await api.post("/posts/add/", formData);
  //       return response.data;
  //     } catch (error) {
  //       throw new Error(error);
  //     }
  //   };
  //////////////////from shoeden site
  signIn = async (username, email, password) => {
    const savedPost = await api
      .post("/dj-rest-auth/login/", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedPost;
  };

  ///////////////from dj site
  // signIn = async ({params}) => {
  //   params.preventDefault()
  //   return fetch('/dj-rest-auth/login/', {
  //     method: 'POST',
  //     credentials: 'omit',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     },
  //     body:  JSON.stringify({username, password})
  //   }).then(resp => resp.json()).then(data => {
  //     changeResponse(data)
  //   }).catch(error => console.log('error ->', error))
  // }

  getUsers = async () => {
    const posts = await api
      .get("/dj-rest-auth/user/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return posts;
  };

  // addUser = async (user) => {
  //   const formData = new FormData();

  //   for (const key in user) {
  //     formData.append(key, user[key]);
  //   }

  //   try {
  //     const response = await api.post("/dj-rest-auth/registration/", formData);
  //     return response.data;
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };
  // getUser = async (params) => {
  //   try {
  //     const response = await api.get("/dj-rest-auth/login/", { params });
  //     return response.data;
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };

  //   getPosts = async (params) => {
  //     try {
  //       const response = await api.get("/posts/", { params });
  //       return response.data;
  //     } catch (error) {
  //       throw new Error(error);
  //     }
  //   };
  //   addPost = async (postBody) => {
  //     const formData = new FormData();

  //     for (const key in postBody) {
  //       formData.append(key, postBody[key]);
  //     }

  //     try {
  //       const response = await api.post("/posts/add/", formData);
  //       return response.data;
  //     } catch (error) {
  //       throw new Error(error);
  //     }
  //   };
  //   deletePost = async (id) => {
  //     try {
  //       return await api.delete(`/posts/delete/${id}/`);
  //     } catch (error) {
  //       throw new Error(error);
  //     }
  //   };
}
