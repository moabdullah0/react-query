const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "light":
      localStorage.setItem("theme", "light");
      return "light";
    case "dark":
      localStorage.setItem("theme", "dark");
      return "dark";
    default:
      return state;
  }
};
export default ThemeReducer;
