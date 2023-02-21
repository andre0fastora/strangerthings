import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const loggedIn = props.loggedIn
  const setLoggedIn = props.setLoggedIn
  const setToken = props.setToken

  return (
    <div id="navbar">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        <h2> Stranger's Things</h2>
      </Link>
      <div id="links">
        <Link
          to="/posts"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <h5>Posts</h5>
        </Link>
        {!loggedIn ?<Link 
          to="/login"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <h5>Login</h5>
        </Link> : 
        <Link 
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
        }}
        >
          <h5 onClick={()=>{
            setLoggedIn(false)
            setToken('')
          }}>Logout</h5>
        </Link>
      }
      </div>
    </div>
  );
};

export default Navbar;
