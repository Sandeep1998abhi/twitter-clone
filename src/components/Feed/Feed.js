import "./Feed.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import db from "../Firebase/firebase";
import { useState, useEffect } from "react";
// import LogOut from "../Config/Logout";
// import zIndex from "@mui/material/styles/zIndex";
// import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      {/* posts */}
      {posts.map((post, index) => (
        <Post
          key={index}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
        />
      ))}
    </div>
  );
}
export default Feed;
