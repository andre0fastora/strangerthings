import React from "react";

const PostCard = (props) => {
  const post = props.post
  console.log(post)
  return (
      <div id="postcard-container">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <div id="postcard-sale-info">
          <p><b>Price:</b>{post.price}</p>
          <p><b>Seller:</b>{post.author.username}</p>
          <p><b>Location:</b>{post.location}</p> 
        </div>  
        <button>Send Message</button>
      </div>
    )
};

export default PostCard;
