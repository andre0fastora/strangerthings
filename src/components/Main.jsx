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
  SinglePost,
  EditPost,
} from "./";
import { Routes, Route, useParams } from "react-router-dom";

const Main = () => {
  const [token, setToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [posts, setPosts] = useState([]);


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
              setLoggedIn={setLoggedIn}
              loggedIn={loggedIn}
              token={token}
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/posts"
          element={
            <Posts
              token={token}
              posts={posts}
              setPosts={setPosts}
              loggedIn={loggedIn}
              currentUser={currentUser}
            />
          }
        />
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
        <Route
          path="/profile"
          element={<Profile currentUser={currentUser} token={token} />}
        />
        <Route path="/addpost" element={<AddPost token={token} />} />
        <Route
          path="/newmessage/:id"
          element={
            <NewMessage
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
              token={token}
            />
          }
        />
        <Route path="/posts/:postID" element={<SinglePost posts={posts} loggedIn={loggedIn} currentUser={currentUser} token={token} />} />
        <Route
          path="/posts/edit/:postID"
          element={<EditPost token={token} />}
        />
      </Routes>
    </div>
  );
};

export default Main;
