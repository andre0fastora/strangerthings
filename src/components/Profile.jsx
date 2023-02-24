import React from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const currentUser = props.currentUser;
  const token = props.token;
  const messages = currentUser.success ? currentUser.data.messages : [];
  const allUserPosts = currentUser.success ? currentUser.data.posts : [];

  let filteredArray = messages.filter(
    (msg) => msg.fromUser.username !== currentUser.data.username
  );
  console.log(currentUser.success);
  return !currentUser.success ? (
    <h1>Loading...</h1>
  ) : (
    <div id="profile-div">
      <div id="profile-header">
        <h1>{`Welcome ${currentUser.data.username}`}</h1>
        <h3>Messages to me:</h3>
      </div>
      {filteredArray.map((msg, idx) => {
        let post = allUserPosts.filter((elem, idx) => {
          if (msg.post._id === elem._id) {
            return true;
          }
        });

        return (
          <div id="profile-messages" key={`${idx}:${msg._id}`}>
            <h3>{`From: ${msg.fromUser.username}`}</h3>
            <p>{msg.content}</p>
            {post[0].active ? (
              <Link
                to={`/posts/${msg.post._id}`}
                style={{
                  textDecoration: "none",
                  color: "blue",
                }}
              >
                <p>{msg.post.title}</p>
              </Link>
            ) : (
              <p style={{ color: "grey" }}>{msg.post.title}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
