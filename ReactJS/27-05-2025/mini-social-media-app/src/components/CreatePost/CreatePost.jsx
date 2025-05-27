import React, { useState } from "react";

const CreatePost = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !subtitle) {
      return alert("Please fill in all the fields");
    }

    const newPost = {
      id: Date.now(),
      title,
      subtitle,
      isLiked: false,
    };

    addPost(newPost);

    setTitle("");
    setSubtitle("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Post Subtitle"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
