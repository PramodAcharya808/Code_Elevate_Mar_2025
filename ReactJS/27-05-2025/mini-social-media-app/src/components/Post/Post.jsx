import React from "react";
import "./Post.css";

const Post = ({ post, onDelete, onLike }) => {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.subtitle}</p>
      <div className="actions">
        <button onClick={() => onLike(post.id)}>
          {post.isLiked ? "💓 Liked" : "🤍 Like"}
        </button>
        <button onClick={() => onDelete(post.id)}>🗑️ Delete</button>
      </div>
    </div>
  );
};

export default Post;
