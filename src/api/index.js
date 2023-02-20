import { json } from "react-router-dom";

const BASE = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft";

export const fetchPosts = async () => {
  const response = await fetch(`${BASE}/posts`);
  const result = await response.json();
  return result.data.posts;
};

export const addNewUserToDatabase = async (userName, password) => {
  try {
    const response = await fetch(`${BASE}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: userName,
          password: password,
        },
      }),
    });
    const result = await response.json();
    console.log(result.data.token);
    return result.data.token;
  } catch (error) {
    console.log(error);
  }
};

export const loginToDatabase = async (userName, password) => {
  try {
    const response = await fetch(`${BASE}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: userName,
          password: password,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result.data.token;
  } catch (error) {
    console.log(error);
  }
};
