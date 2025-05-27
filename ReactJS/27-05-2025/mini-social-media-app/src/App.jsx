import React, { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost/CreatePost";
import Home from "./components/Home/Home";

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const deletPost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const toggleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, isLiked: !post.isLiked } : post
      )
    );
  };

  return (
    <div className="container">
      <h1>Mini Social Media App</h1>
      <CreatePost addPost={addPost} />
      <Home posts={posts} onDelete={deletPost} onLike={toggleLike} />
    </div>
  );
};

export default App;
