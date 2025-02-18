const ReducerTest = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem("user", action.payload.user);
      localStorage.setItem("token", action.payload.token || null);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    }
    case "LOGOUT": {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: null,
      };
    }
    default:
      return state;
  }
};
export default ReducerTest;
