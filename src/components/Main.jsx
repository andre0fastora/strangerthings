import React, {useState} from "react";
import { Navbar, Home, Posts, Login, Register } from "./";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  const [token,setToken] = useState("")
  const [loggedIn,setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  
  return (
    <div id="main">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} setToken={setToken} />
      <Routes>
        <Route exact path="/" element={<Home loggedIn={loggedIn} token={token} setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login setToken={setToken} setLoggedIn={setLoggedIn} token={token} setCurrentUser={setCurrentUser} />} />
        <Route path="/register" element={<Register setToken={setToken} setLoggedIn={setLoggedIn} />} />
      </Routes>
    </div>
  );
};

export default Main;
