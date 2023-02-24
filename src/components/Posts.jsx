import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PostCard } from "./";
import { fetchPosts } from "../api";

const Posts = (props) => {
  const loggedIn = props.loggedIn;
  const posts = props.posts;
  const setPosts = props.setPosts;
  const currentUser = props.currentUser;
  const token = props.token;
  const localStorageData = localStorage.getItem("token");
  const [searchVal, setSearchVal] = useState("");
  let filteredArray = posts.length ? [...posts] : [];

  const filteringSearch = () => {
    filteredArray = posts.filter((post) => {
      if (
        post.title.toLowerCase().includes(searchVal.toLowerCase()) ||
        post.price.toLowerCase().includes(searchVal.toLowerCase()) ||
        post.description.toLowerCase().includes(searchVal.toLowerCase()) ||
        post.location.toLowerCase().includes(searchVal.toLowerCase()) ||
        post.author.username.toLowerCase().includes(searchVal.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
    return filteredArray;
  };

  const getPosts = async () => {
    let data = "";
    if (localStorageData) {
      data = await fetchPosts(localStorageData);
    } else {
      data = await fetchPosts(token);
    }
    setPosts(data);
    console.log("Post are being set");
  };

  useEffect(() => {
    getPosts();
    console.log(posts);
  }, []);

  // useEffect(() => {
  //   setPosts(posts.reverse());
  //   console.log("Post are being reversed now", posts);
  // }, [posts]);

  setPosts(posts.reverse());
  return !posts.length ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <div id="posts-header-div">
        <h1>Posts</h1>
        <input
          placeholder="search"
          type="text"
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
        />
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
        {filteringSearch().map((post) => {
          return (
            <PostCard
              post={post}
              key={`post: ${post._id}`}
              currentUser={currentUser}
              loggedIn={loggedIn}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
