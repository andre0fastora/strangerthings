import React from "react";
import { Navbar, Home, Posts, Login, Register } from "./";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div id="main">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Main;
