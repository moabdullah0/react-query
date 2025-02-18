import React, { useReducer } from "react";
import ReducerTest from "./ReducerTest";

const Test = () => {
  const initialValue = localStorage.getItem("theme") || "dark";
  const [theme, dispatch] = useReducer(ReducerTest, initialValue);
  return (
    <div>
      <button
      className="px-5 py-2 bg-amber-200 rounded-2xl"
        type=""
        onClick={() => dispatch({ type: theme == "light" ? "dark" : "light" })}
      >
        {theme}
      </button>
    </div>
  );
};

export default Test;
