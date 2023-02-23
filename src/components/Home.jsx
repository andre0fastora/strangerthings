import React, {useState, useEffect} from "react";
import { fetchUserData } from "../api";
import { Link } from "react-router-dom"

const Home = (props) => {
  const loggedIn = props.loggedIn
  const setLoggedIn = props.setLoggedIn
  const token = props.token
  const currentUser = props.currentUser
  const setCurrentUser = props.setCurrentUser

  const getUserData = async () => {
    const localStorageData = localStorage.getItem('token')
    let userData = ''
    if(localStorageData){
      userData = await fetchUserData(localStorageData)
      setLoggedIn(true)
    }else if(token){
      userData = await fetchUserData(token)
      setLoggedIn(true)
    }
    setCurrentUser(userData)
    console.log(currentUser)
  }

  useEffect(()=>{
    getUserData()
  },[loggedIn])

  
  return (
    <div id="home-page-div">
      <h1>Welcome to Stranger's Things! </h1>
      {!currentUser.success ? <h3>You are not Logged in!</h3> : <h3>{`Logged in as ${currentUser.data.username}`}</h3>} 
      {!currentUser.success ? <Link to="/login"><button>Login Here</button></Link> : <Link to="/profile"><button>View Profile</button></Link>}
    </div>
  );
};

export default Home;
