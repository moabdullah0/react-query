const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { username: action.payload };
    case "logout":
      return { username: "" };
      default:return state
  }
};
export default authReducer