import React from "react";
import { Navbar, Home, Posts } from "./";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div id="main">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
};

export default Main;
