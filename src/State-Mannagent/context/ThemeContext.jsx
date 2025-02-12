import { createContext, useReducer } from "react";
import ThemeReducer from "../Reducer/ThemeReducer";

const ThemeContext = createContext(); 

const ThemeProvider = ({ children }) => {
  const initialState = localStorage.getItem("theme") || "dark";
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
