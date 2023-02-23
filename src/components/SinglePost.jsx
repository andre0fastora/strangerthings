import React, { useEffect } from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import { fetchPosts } from "../api";
import { deletePostFromDatabase } from "../api";
import {EditPost} from "./";

const SinglePost = (props) => {
  let location = useLocation();
  const navigate = useNavigate();
  const posts = props.posts
  let { postID } = useParams();
  let filterForSinglePost = posts.filter((post,idx)=>{
    if(post._id === postID){
      return true
    }
  })
  let post = filterForSinglePost[0]
  // let post = location.state;
  console.log(post)
  let messagesArray = post.messages;
  const currentUser = props.currentUser
  const token = props.token;
  const loggedIn = props.loggedIn
  let filteredArray = currentUser.data.messages
  let localStorageData = localStorage.getItem('token')


  const deletePost = async () => {
    if(localStorageData){
      await deletePostFromDatabase(post._id, localStorageData);
    }else{
      await deletePostFromDatabase(post._id, token);
    }
    alert("Post Deleted");
    navigate("/posts");
  };
  


    filteredArray = filteredArray.filter((msg,idx)=>{
      if(msg.post._id === postID){
        return true
      }
    }) 




  return (
    <div id="single-view-div">
      <div id="post-info-div">
        <h1>{post.title}</h1>

        <p>{post.description}</p>
        <p>{`Price: ${post.price}`} </p>
        <p>{`Seller: ${post.author.username}`} </p>
        <p>{`Willing to Deliver: ${post.willDeliver}`}</p>
        <p>{`Location: ${post.location}`}</p>
        <p>{`Is Active: ${post.active}`}</p>

        {post.isAuthor ? (
          <>
            <Link to={`/posts/edit/${post._id}`} state={post}><button>Edit</button></Link>
            <button
              onClick={() => {
                deletePost();
              }}
            >
              Delete
            </button>
          </>
        ) : null}
      <Link to="/posts" ><h3>Back to all Posts</h3></Link>
      </div>
      <h3>Your messages for this post</h3>
      {post.isAuthor ? messagesArray.map((msg, idx) => {
        return (
          <div id="profile-messages" key={`${idx}:${msg._id}`}>
            <h3>{`From: ${msg.fromUser.username}`}</h3>
            <p>{msg.content}</p>
          </div>
        );
      }) : filteredArray.map((msg,idx)=>{
        return(
          <div id="profile-messages" key={`${idx}:${msg._id}`}>
            <p>{msg.content}</p>
          </div>
        )
      })}
    </div>
  );
};

export default SinglePost;
