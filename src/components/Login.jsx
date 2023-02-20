import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>User Name</label>
        <input type="text"></input>
        <label>Password</label>
        <input type="password"></input>
        <button type="submit">Login</button>
      </form>
      <Link to="/register">
        <p>Dont have an account? Please sign up here!</p>
      </Link>
    </div>
  );
};

export default Login;
