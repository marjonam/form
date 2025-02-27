import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

export default function App() {
  const { posts, loading, createPost, deletePost } = useFetch();
  const [title, setTitle] = useState("");
  const [textArea, setTextArea] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() && textArea.trim()) {
      createPost(title, textArea);
      setTitle("");
      setTextArea("");
    }
  }

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.textArea?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="wrapper">
      <h1>Posts</h1>

      <form onSubmit={handleSubmit} className="form">
        <div className="input-box">
          {" "}
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="inputTitle"
          />
        </div>

        <div className="input-box">
          {" "}
          <input
            type="text"
            placeholder="Text"
            value={textArea}
            onChange={(e) => setTextArea(e.target.value)}
            className="textArea"
          />
        </div>
        <button type="submit">Create Post</button>
      </form>

      {loading && <p>Loading posts...</p>}

      <div className="box">
        {filteredPosts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <h3>{post.textArea}</h3>
            <button onClick={() => deletePost(post.id)}>Delete Post</button>
          </div>
        ))}
      </div>
    </div>
  );
}
