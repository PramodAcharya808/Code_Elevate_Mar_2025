import React from "react";
import Post from "../Post/Post";

const Home = ({ posts, onDelete, onLike }) => {
  return (
    <div className="post-list">
      {posts.length === 0 ? (
        <p>No Posts yet.</p>
      ) : (
        posts.map((post) => (
          <Post key={post.id} post={post} onDelete={onDelete} onLike={onLike} />
        ))
      )}
    </div>
  );
};

export default Home;
