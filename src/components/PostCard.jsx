import React from "react";
import { useNavigate } from "react-router-dom";
import NewMessage from "./NewMessage";

const PostCard = (props) => {
  const post = props.post;
  const loggedIn = props.loggedIn;
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
      <button
        onClick={() => {
          loggedIn ? navigate(`/newmessage/${post._id}`) : navigate("/login");
        }}
      >
        Send Message
      </button>
    </div>
  );
};

export default PostCard;
