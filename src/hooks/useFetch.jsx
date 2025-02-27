import { useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export function useFetch() {
  const [posts, setPosts] = useState([]);

  async function createPost(title, textArea) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json " },
        body: JSON.stringify({
          title,
          textArea,
          userId: 1,
        }),
      });

      if (response.ok) {
        const newPost = await response.json();
        setPosts((prevPosts) => [newPost, ...prevPosts]);
      }
    } catch (error) {
      console.error("went wrong:", error);
    }
  }

  async function deletePost(postID) {
    try {
      const response = await fetch(`${API_URL}/${postID}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postID));
      }
    } catch (error) {
      console.error(`went wrong! ${postID}:`, error);
    }
  }

  return { posts, createPost, deletePost };
}
