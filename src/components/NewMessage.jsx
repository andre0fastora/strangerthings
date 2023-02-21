import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { addNewMessageToDatabase } from "../api";
const NewMessage = (props) => {
  let token = props.token;
  let { id } = useParams();
  const [content, setContent] = useState("");
  return (
    <div>
      <h1>Write a new Message</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addNewMessageToDatabase(content, id, token);
          alert("Your message was successfully sent");
          setContent("");
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
