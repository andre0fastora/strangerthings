import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { editPostInDatabase } from "../api";

const EditPost = (props) => {
  const token = props.token;
  let location = useLocation();
  let navigate = useNavigate()
  let post = location.state;

  const [title,setTitle] = useState(post.title)  
  const [desc, setDesc] = useState(post.description)
  const [price,setPrice] = useState(post.price)
  const [postLocation,setPostLocation] = useState(post.location)
  const [deliver,setDeliver] = useState(post.willDeliver)


  return (
    <div>
      <h1>{`Editing: ${post.title}`}</h1>
      <div id="edit-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            editPostInDatabase(
              post._id,  
              token,
              title,
              desc,
              price,
              postLocation,
              deliver,
            );
            alert("Post has been edited successfully")
            navigate("/posts");
          }}
          id="new-post-form"
        >
          <input
            placeholder="Title"
            type={"text"}
            value={title}
            required
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />

          <textarea
            onChange={(e) => {
              setDesc(e.target.value)
            }}
            value={desc}
            placeholder="description"
            form_id="new-post-form"
          />

          <input
            onChange={(e) => {
              setPrice(e.target.value)
            }}
            value={price}
            placeholder="Price"
            type={"text"}
          />

          <input
            onChange={(e) => {
              setPostLocation(e.target.value)
            }}
            value={postLocation}
            placeholder="Location"
            type={"text"}
          />
          <div>
            <label>Willing to deliver</label>
            <input
              onChange={(e) => {
                setDeliver(!deliver)
              }}
              checked={deliver}
              type="checkbox"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
