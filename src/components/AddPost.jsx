import React, { useState } from "react";
import { addNewPostToDatabase } from "../api";
import { useNavigate } from "react-router-dom";
const AddPosts = (props) => {
  const token = props.token;
  let localStorageData = localStorage.getItem('token')
  let title = "";
  let description = "";
  let price = 0;
  let location = "";
  let willingToDeliver = false;
  let data = {};
  const navigate = useNavigate()

  return (
    <div>
      <h1 id="new-post-h1">New Post</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if(localStorageData){
            data = addNewPostToDatabase(
              title,
              description,
              price,
              willingToDeliver,
              localStorageData
            );
            console.log(data)
          }else{
            data = addNewPostToDatabase(
              title,
              description,
              price,
              willingToDeliver,
              token
            );
          }
          navigate("/posts")
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
          }}
          placeholder="description"
          form_id="new-post-form"
        />

        <input
          onChange={(e) => {
            price = e.target.value;
          }}
          placeholder="Price"
          type={"number"}
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
