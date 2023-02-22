import React from "react";
import {Link} from "react-router-dom"

const Profile = (props) => {
  const currentUser = props.currentUser;
  const token = props.token;
  const messages = currentUser.data.messages;

  console.log(currentUser)

  let filteredArray = messages.filter(
    (msg) => msg.fromUser.username !== currentUser.data.username
  );

  return (
    <div id="profile-div">
      <div id="profile-header">
        <h1>{`Welcome ${currentUser.data.username}`}</h1>
        <h3>Messages to me:</h3>
      </div>
      {filteredArray.map((msg, idx) => {
        console.log(msg)
        return (
          <div id="profile-messages" key={`${idx}:${msg._id}`}>
            <h3>{`From: ${msg.fromUser.username}`}</h3>
            <p>{msg.content}</p>
            <Link to={`/posts/${msg.post._id}`} style={{
              textDecoration: "none",
              color: "blue",
        }}
        ><p>{msg.post.title}</p></Link>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
