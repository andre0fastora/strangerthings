import React, { useState } from "react";
import { addNewPostToDatabase } from "../api";
const AddPosts = (props) => {
  const token = props.token;
  let title = "";
  let description = "";
  let price = 0;
  let location = "";
  let willingToDeliver = false;
  let data = {};

  return (
    <div>
      <h1 id="new-post-h1">New Post</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          data = addNewPostToDatabase(
            title,
            description,
            price,
            willingToDeliver,
            token
          );
          console.log(data);
        }}
        id="new-post-form"
      >
        <input
          placeholder="Title"
          type={"text"}
          required
          onChange={(e) => {
            title = e.target.value;
          }}
        />

        <textarea
          onChange={(e) => {
            description = e.target.value;
            console.log(description);
          }}
          placeholder="description"
          form_id="new-post-form"
        />

        <input
          onChange={(e) => {
            price = e.target.value;
          }}
          placeholder="Price"
          type={"text"}
        />

        <input
          onChange={(e) => {
            location = e.target.value;
          }}
          placeholder="Location"
          type={"text"}
        />
        <div>
          <label>Willing to deliver</label>
          <input
            onChange={(e) => {
              willingToDeliver = !willingToDeliver;
            }}
            type="checkbox"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPosts;