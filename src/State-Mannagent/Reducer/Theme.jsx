import  { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

const Theme = () => {
  const { state, dispatch } = useContext(ThemeContext);
  return (
    <div>
      <button
        onClick={() => dispatch({ type: state == "dark" ? "light" : "dark" })}
        className={`px-4 py-2 rounded-2xl ${
          state == "light" ? "bg-black text-white" : "bg-gray-400 text-black"
        }`}
      >
        {state}
      </button>
    </div>
  );
};

export default Theme;
