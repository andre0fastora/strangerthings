import React from "react";
import { Link } from "react-router-dom";
import { PostCard } from "./";

const Posts = () => {
  return (
    <div>
      <div id="posts-header-div">
        <h1>Posts</h1>
        <input placeholder="search" type="text" />
        <Link to="/addpost">
          <p>Add Post</p>
        </Link>
      </div>
      <PostCard />
    </div>
  );
};

export default Posts;
