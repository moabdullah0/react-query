import { useReducer } from "react";
import authReducer from "./authReducer";

const Auth = () => {
  const [state, dispatch] = useReducer(authReducer, {});

  return (
    <div>
      <h1>userName:{state.username}</h1>
      <button
        type=""
        onClick={() => dispatch({ type: "login", payload: "Mohamad" })}
        className="pt-2 px-5 bg-blue-500 text-white mx-2"
      >
        Login
      </button>
      <button
        type=""
        onClick={() => dispatch({ type: "logout" })}
        className="pt-2 px-5 bg-blue-500 text-white mx-2"
      >
        Logout
      </button>
    </div>
  );
};

export default Auth;
