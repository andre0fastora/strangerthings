import React, {useState} from "react";
import { Navbar, Home, Posts, Login, Register } from "./";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  const [token,setToken] = useState("")
  
  return (
    <div id="main">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login token={token} setToken={setToken} />} />
        <Route path="/register" element={<Register token={token} setToken={setToken} />} />
      </Routes>
    </div>
  );
};

export default Main;
