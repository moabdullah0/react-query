import React, { useContext } from "react";
import { ContextAuth } from "./ContextTest";
import axios from "axios";

const LoginContext = () => {
  const { dispatch } = useContext(ContextAuth);
  const Login = async () => {
    const { data } = await axios.post("https://dummyjson.com/auth/login", {
      username: "emilys",
      password: "emilyspass",
    });
    dispatch({
      type: "LOGIN",
      payload: { user: data, token: data.accessToken },
    });
  };
  return (
    <div>
      <button
        onClick={Login}
        className="bg-blue-600 text-white pt-5 px-5 pb-3 rounded-2xl"
        type=""
      >
        Login
      </button>
    </div>
  );
};

export default LoginContext;
