"use client";
import { useState } from "react";
import CreatePost from "@/components/CreatePost";
import Profile from "@/components/Profile";
import Post from "@/components/Post";
import fakePosts from "./fakePosts";
import styles from "./page.module.css";

export default function Home() {
  const [posts, setPosts] = useState(fakePosts);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const profileDescription = `I’m John, a creative problem-solver with a love for building innovative digital experiences.
  With a background in full-stack development, I thrive at the intersection of technology and artistry.`;

  return (
    <div className={styles.page}>
      <h1>ACM Threads</h1>
      <div className={styles.dashboard}>
        <div className={styles.profile}>
          <Profile
            name="John Doe"
            description={profileDescription}
            email="johndoe@gmail.com"
            linkedIn="https://www.linkedin.com/in/john-doe-7418a3b0/"
          />
        </div>
        <div className={styles.createPost}>
          <CreatePost onCreate={addPost} />
        </div>
        <div className={styles.posts}>
          {posts.length === 0 ? (
            <p>No posts yet. Start by creating one!</p>
          ) : (
            posts.map((post, index) => <Post key={index} {...post} />)
          )}
        </div>
      </div>
    </div>
  );
}
