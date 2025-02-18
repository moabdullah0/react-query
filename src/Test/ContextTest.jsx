import React, { useReducer } from "react";
import ReducerTest from "./ReducerTest";

export const ContextAuth = React.createContext();
const ContextTest = ({ children }) => {
  const [state, dispatch] = useReducer(ReducerTest, {});

  return (
    <ContextAuth.Provider value={{ state, dispatch }}>
      {children}
    </ContextAuth.Provider>
  );
};

export default ContextTest;
