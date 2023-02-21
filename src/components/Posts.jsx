import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PostCard } from "./";
import { fetchPosts } from "../api";

const Posts = (props) => {
  const loggedIn = props.loggedIn;
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const data = await fetchPosts();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div id="posts-header-div">
        <h1>Posts</h1>
        <input placeholder="search" type="text" />
        {loggedIn ? (
          <Link to="/addpost">
            <p>Add Post</p>
          </Link>
        ) : (
          <Link to="/login">
            <p>Add Post</p>
          </Link>
        )}
      </div>
      <div>
        {posts.map((post) => {
          return (
            <PostCard
              post={post}
              key={`post: ${post._id}`}
              loggedIn={loggedIn}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
