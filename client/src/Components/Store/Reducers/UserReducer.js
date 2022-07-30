const INITIAL_STATE = {
  isLoggedIn: false,
  loginError: "",
  response: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
      };
    case "SIGN_IN_SUCCESS":
      localStorage.setItem("userCredentials",action.payload.data.user);
      return {
        ...state,
        loginError: "",
        loginLoading: "SUCCESS",
        isLoggedIn: true,
        response: action.payload,
      };
    
    case "SIGN_IN_FAILED":
      return {
        ...state,
        isLoggedIn: false,
        loginLoading: "FAILED",
        loginError: action.payload,
        response: {},
      };

    case "SET_ERROR":
      return { ...state, loginError: "" };
    case "SIGN_OUT":
      localStorage.removeItem("userCredentials");
      return {
        ...state,
        isLoggedIn: false,
        response: {},
        loginError: "",
      };

    default:
      return state;
  }
};

export default userReducer;
