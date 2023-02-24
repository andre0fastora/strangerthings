import React, { useEffect } from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import { fetchPosts } from "../api";
import { deletePostFromDatabase } from "../api";
import { EditPost } from "./";
import loading from '../gifs-and-fonts/loading-loading-forever.gif'

const SinglePost = (props) => {
  let location = useLocation();
  const navigate = useNavigate();
  const posts = props.posts;

  let { postID } = useParams();
  let filterForSinglePost = posts.filter((post, idx) => {
    if (post._id === postID) {
      return true;
    }
  });
  let post = filterForSinglePost[0];


  let messagesArray = post ? post.messages : [];
  const currentUser = props.currentUser;
  const token = props.token;
  const loggedIn = props.loggedIn;
  let filteredArray = currentUser.success ? currentUser.data.messages : [];
  let localStorageData = localStorage.getItem("token");

  useEffect(() => {
    !posts.length ? navigate("/posts") : null;
  }, []);
  const deletePost = async () => {
    if (localStorageData) {
      await deletePostFromDatabase(post._id, localStorageData);
    } else {
      await deletePostFromDatabase(post._id, token);
    }
    alert("Post Deleted");
    navigate("/posts");
  };

  filteredArray = filteredArray.filter((msg, idx) => {
    if (msg.post._id === postID) {
      return true;
    }
  });

  return !post ? (
    <div id="loading-image">
      <img src={loading} alt="loading-gif" style={{width: "500px", height: "500px"}} />
    </div>
  ) : (
    <div id="single-view-div">
      <div id="post-info-div">
        <h1>{post.title}</h1>

        <pre>{post.description}</pre>
        <p> <b>Price: </b>{`${post.price}`} </p>
        <p> <b>Seller: </b>{`${post.author.username}`} </p>
        <p> <b>Willing to Deliver: </b>{`${post.willDeliver}`}</p>
        <p><b>Location: </b>{`${post.location}`}</p>
        <p><b>Is Active: </b>{`${post.active}`}</p>

        {post.isAuthor ? (
          <>
            <Link to={`/posts/edit/${post._id}`} state={post}>
              <button id="edit-button">Edit</button>
            </Link>
            <button id="delete-button"
              onClick={() => {
                deletePost();
              }}
            >
              Delete
            </button>
          </>
        ) : null}
        {post.isAuthor ? null : (
          <Link to={`/newmessage/${post._id}`}>
            <h5>Send a Message</h5>
          </Link>
        )}
        <Link to="/posts">
          <h3>Back to all Posts</h3>
        </Link>
      </div>
      <h3>Your messages for this post</h3>
      {post.isAuthor
        ? messagesArray.map((msg, idx) => {
            return (
              <div id="profile-messages" key={`${idx}:${msg._id}`}>
                <h3>{`From: ${msg.fromUser.username}`}</h3>
                <p>{msg.content}</p>
              </div>
            );
          })
        : filteredArray.map((msg, idx) => {
            return (
              <div id="profile-messages" key={`${idx}:${msg._id}`}>
                <p>{msg.content}</p>
              </div>
            );
          })}
    </div>
  );
};

export default SinglePost;
