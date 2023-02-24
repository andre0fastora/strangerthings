import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addNewMessageToDatabase, fetchUserData } from "../api";
import loading from '../gifs-and-fonts/loading-loading-forever.gif'

const NewMessage = (props) => {
  let token = props.token;
  let currentUser = props.currentUser;
  let setCurrentUser = props.setCurrentUser;
  let allMesages = currentUser.success ? currentUser.data.messages : [];
  let localStorageData = localStorage.getItem("token");
  let { id } = useParams();
  const [content, setContent] = useState("");
  const [filteredMessages, setFilteredMessages] = useState(allMesages);

  const filterMessages = () => {
    let newFilteredMessages = allMesages.filter((msg, idx) => {
      if (
        msg.fromUser.username === currentUser.data.username &&
        currentUser.data.messages[idx].post._id === id
      ) {
        return true;
      }
    });

    setFilteredMessages(newFilteredMessages);
  };

  useEffect(() => {
    filterMessages();
  }, [currentUser]);

  const getUserData = async () => {
    let userData = "";
    if (localStorageData) {
      userData = await fetchUserData(localStorageData);
      setCurrentUser(userData);
    } else {
      userData = await fetchUserData(token);
      setCurrentUser(userData);
    }
  };

  return !currentUser.success ? (
    <div id="loading-image">
      <img src={loading} alt="loading-gif" style={{width: "500px", height: "500px"}} />
    </div>
  ) : (
    <div>
      <h1 id="message-history-header">Message History</h1>

      {filteredMessages.map((msg, idx) => {
        return (
          <div key={`${idx}:${msg._id}`}>
            <div id="message-history-card">
              <p>{msg.content}</p>
            </div>
          </div>
        );
      })}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (localStorageData) {
            addNewMessageToDatabase(content, id, localStorageData);
          } else {
            addNewMessageToDatabase(content, id, token);
          }
          alert("Your message was successfully sent");
          setContent("");
          getUserData();
        }}
        id="new-message-form"
      >
        <textarea
          form_id="new-message-form"
          value={content}
          placeholder="Enter your message here"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default NewMessage;
