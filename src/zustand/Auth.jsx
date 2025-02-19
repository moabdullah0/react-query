import AuthStore from "../app/store";

const Auth = () => {
  const { user, login, logout } = AuthStore();
  return (
    <div>
      <h1>User: {user}</h1>
      <button type="" onClick={() => login("Mohamad")}>
        Login
      </button>
      <button type="" onClick={logout}>Logout</button>
    </div>
  );
};

export default Auth;
