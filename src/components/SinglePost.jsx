import React, { useEffect } from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import { fetchPosts } from "../api";
import { deletePostFromDatabase } from "../api";
import {EditPost} from "./";

const SinglePost = (props) => {
  let location = useLocation();
  const navigate = useNavigate();
  let post = location.state;
  let messagesArray = post.messages;
  const token = props.token;
  const renderArray = ['oneItem']

  const deletePost = async () => {
    await deletePostFromDatabase(post._id, token);
    alert("Post Deleted");
    navigate("/posts");
  };



  let { postID } = useParams();

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
      {post.isAuthor ? <h3>Messages for this post</h3> : null}
      {messagesArray.map((msg, idx) => {
        return (
          <div id="profile-messages" key={`${idx}:${msg._id}`}>
            <h3>{`From: ${msg.fromUser.username}`}</h3>
            <p>{msg.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SinglePost;
