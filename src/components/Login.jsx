import React, {useState} from "react";
import { Link } from "react-router-dom";
import { loginToDatabase } from "../api";
const Login = (props) => {
  const token = props.token
  const setToken = props.setToken
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  
  const loginUser = async () =>{
    const data = await loginToDatabase(userName, password)
    setToken(data)
    console.log(token)
  }
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e)=>{
        e.preventDefault()
        loginUser()
      }}>
        <label>User Name</label>
        <input type="text" required onChange={(e)=>{
          setUserName(e.target.value)
        }}/>
        <label>Password</label>
        <input type="password" required onChange={(e)=>{
          setPassword(e.target.value)
        }}/>
        <button type="submit">Login</button>
      </form>
      <Link to="/register">
        <p>Dont have an account? Please sign up here!</p>
      </Link>
    </div>
  );
};

export default Login;
