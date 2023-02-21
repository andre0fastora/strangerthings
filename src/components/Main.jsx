import React, { useState } from "react";
import {
  Navbar,
  Home,
  Posts,
  Login,
  Register,
  Profile,
  AddPost,
  NewMessage,
} from "./";
import { Routes, Route, useParams } from "react-router-dom";

const Main = () => {
  const [token, setToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div id="main">
      <Navbar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        setToken={setToken}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              loggedIn={loggedIn}
              token={token}
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />
          }
        />
        <Route path="/posts" element={<Posts loggedIn={loggedIn} />} />
        <Route
          path="/login"
          element={
            <Login
              setToken={setToken}
              setLoggedIn={setLoggedIn}
              token={token}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/register"
          element={<Register setToken={setToken} setLoggedIn={setLoggedIn} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addpost" element={<AddPost token={token} />} />
        <Route path="/newmessage/:id" element={<NewMessage token={token} />} />
      </Routes>
    </div>
  );
};

export default Main;
