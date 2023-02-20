import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/" style={{
        textDecoration: 'none', 
        color: 'white'
    }}><h2> Stranger's Things</h2></Link>
      <div id="links">
        <Link to="/posts" style={{
           textDecoration: 'none',
           color: 'white' 
          }}><h5>Posts</h5></Link>
      </div>
    </div>
  );
};

export default Navbar;
