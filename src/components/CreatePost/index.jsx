"use client";
import { useState } from "react";
import styles from "./style.module.css";

const CreatePost = ({ onCreate }) => {
  const [newPost, setNewPost] = useState("");

  const handleCreatePost = () => {
    if (newPost.trim()) {
      const post = {
        user: "John Doe",
        content: newPost,
        likes: 0,
        dislikes: 0,
      };
      onCreate(post);
      setNewPost("");
    }
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.post}
        type="text"
        placeholder="Enter your thread"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      ></input>
      <a className={styles.createButton} onClick={handleCreatePost}>
        Create Post
      </a>
    </div>
  );
};

export default CreatePost;
