import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PostCard } from "./";
import { fetchPosts } from "../api";

const Posts = () => {
  const [posts, setPosts] = useState([])
  const getPosts = async () => {
    const data = await fetchPosts()
    setPosts(data)
  }

  useEffect(()=>{
    getPosts()
  },[])
  
  return (
    <div>
      <div id="posts-header-div">
        <h1>Posts</h1>
        <input placeholder="search" type="text" />
        <Link to="/addpost">
          <p>Add Post</p>
        </Link>
      </div>
      <div>
        {
        posts.map((post)=>{
          return <PostCard post={post} key={`post: ${post._id}`}/>
        })
        }
      </div>
    </div>
  );
};

export default Posts;
