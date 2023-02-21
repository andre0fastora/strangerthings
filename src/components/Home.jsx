import React, {useState, useEffect} from "react";
import { fetchUserData } from "../api";
import { Link } from "react-router-dom"

const Home = (props) => {
  const loggedIn = props.loggedIn
  const token = props.token
  const currentUser = props.currentUser
  const setCurrentUser = props.setCurrentUser

  const getUserData = async () => {
    const userData = await fetchUserData(token)
    setCurrentUser(userData)
  }

  useEffect(()=>{
    getUserData()
  },[token])

  
  return (
    <div id="home-page-div">
      <h1>Welcome to Stranger's Things! </h1>
      {!currentUser.success ? <h3>You are not Logged in!</h3> : <h3>{`Logged in as ${currentUser.data.username}`}</h3>} 
      {!currentUser.success ? <Link to="/login"><button>Login Here</button></Link> : <Link to="/profile"><button>View Profile</button></Link>}
    </div>
  );
};

export default Home;
