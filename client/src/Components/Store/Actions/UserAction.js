import axios from "axios";

export const userSignIn = () => {
  return {
    type: "SIGN_IN",
  };
};

export const userSignInSuccess = (response) => {
  return {
    type: "SIGN_IN_SUCCESS",
    payload: response,
  };
};

export const userSignInFailed = (error) => {
  return {
    type: "SIGN_IN_FAILED",
    payload: error,
  };
};

export const setError = () => {
  return {
    type: "SET_ERROR",
  };
};
export const userSignOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const clearLoginResponse = () => {
  return {
    type: "CLEAR_LOGIN_RESPONSE",
  };
};

export const signIn = (credentials) => {
  return (dispatch) => {
    dispatch(userSignIn());
    let options = {
      method: "POST",
      url: "http://localhost:4040/userLogin",
      WithCredentials: true,
      credentials: "include",
      headers: {
        Accept: "*",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: credentials,
    };
    axios(options)
      .then((response) => {
        dispatch(userSignInSuccess(response));
      })
      .catch((error) => {
        dispatch(userSignInFailed(error.response.data.msg));
      });
  };
};
