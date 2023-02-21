import React from "react";
import { useNavigate, Link } from "react-router-dom";
import NewMessage from "./NewMessage";

const PostCard = (props) => {
  const post = props.post;
  const loggedIn = props.loggedIn;
  const currentUser = props.currentUser
  const navigate = useNavigate();

  return (
    <div id="postcard-container">
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <div id="postcard-sale-info">
        <p>
          <b>Price:</b>
          {post.price}
        </p>
        <p>
          <b>Seller:</b>
          {post.author.username}
        </p>
        <p>
          <b>Location:</b>
          {post.location}
        </p>
      </div>
      {currentUser.success && currentUser.data.username !== post.author.username ? <button
        onClick={() => {
          loggedIn ? navigate(`/newmessage/${post._id}`) : navigate("/login");
        }}
      >
        Send Message
      </button> : null}
      <Link to={`/posts/${post._id}`} ><button>View Post</button></Link>
    </div>
  );
};

export default PostCard;
