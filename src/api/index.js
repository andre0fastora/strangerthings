import { json } from "react-router-dom";

const BASE = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft";

export const fetchPosts = async (token) => {
  const response = await fetch(`${BASE}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  }) ;
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
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserData = async (token) => {
  try {
    const response = await fetch(`${BASE}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const addNewPostToDatabase = async (
  title,
  desc,
  price,
  deliver,
  token,
  location
) => {
  try {
    const response = await fetch(`${BASE}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: desc,
          price: price,
          location: location,
          willDeliver: deliver,

        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const addNewMessageToDatabase = async (content, postId ,token) => {
  try {
    const response = await fetch(`${BASE}/posts/${postId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        message: {
          content: content
        },
      }),
    });
    const result = await response.json();
    console.log(result)
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const deletePostFromDatabase = async (postId, token) => {
  try {
    const response = await fetch(`${BASE}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      
      
    });
    const result = await response.json();
    console.log(result)
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const editPostInDatabase = async (postId, token, title, description, price, location, deliver) => {
  try {
    const response = await fetch(`${BASE}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          willDeliver: deliver
        }
      })
    })
    const result = await response.json()
    console.log(result)
    return result
  } catch (error) {
    console.log(error)
  }
}