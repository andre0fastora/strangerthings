import React, { useState, useEffect } from "react";
import { addNewUserToDatabase } from "../api";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const setToken = props.setToken;
  const setLoggedIn = props.setLoggedIn;
  const navigate = useNavigate();

  const sendNewUser = async () => {
    if (
      newPassword === confirmedPassword &&
      newUserName.length >= 3 &&
      newPassword.length >= 6
    ) {
      const data = await addNewUserToDatabase(newUserName, confirmedPassword);
      localStorage.setItem("token", data);
      console.log(data);

      setNewUserName("");
      setNewPassword("");
      setConfirmedPassword("");
      setLoggedIn(true);
      alert("Registration succesful!");
      navigate("/");
    } else {
      alert(
        "Eror Occured, please check if passwords match and min lengths are met"
      );
    }
  };

  return (
    <div id="registration-div">
      <h1>New User Sign Up</h1>
      <form
        id="registration-form"
        onSubmit={(e) => {
          e.preventDefault();
          sendNewUser();
        }}
      >
        <label>New User Name</label>
        <input
          required
          min="3"
          placeholder={"Min 3 characters"}
          onChange={(e) => {
            setNewUserName(e.target.value);
          }}
          type="text"
        />
        <label> New Password</label>
        <input
          required
          min="6"
          placeholder={"Min 6 characters"}
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
          type="password"
        />
        <label> Confirm Password</label>
        <input
          required
          min="6"
          placeholder={"Min 6 characters"}
          onChange={(e) => {
            setConfirmedPassword(e.target.value);
          }}
          type="password"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
