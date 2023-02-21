import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchUserData, loginToDatabase } from "../api";
const Login = (props) => {
  const setToken = props.setToken
  const token = props.token
  const setLoggedIn = props.setLoggedIn
  const setCurrentUser = props.setCurrentUser
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();
  
  const loginUser = async () =>{
    const data = await loginToDatabase(userName, password)
    if(data.success){
      setToken(data.data.token)
      setLoggedIn(true)
      alert('Successfully logged in')
      navigate("/")
    }else{
      alert('Login failed')
    }
  }

  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e)=>{
        e.preventDefault()
        loginUser()
        setUserName('')
        setPassword('')
      }}>
        <label>User Name</label>
        <input type="text" required value={userName} onChange={(e)=>{
          setUserName(e.target.value)
        }}/>
        <label>Password</label>
        <input type="password" value={password} required onChange={(e)=>{
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
