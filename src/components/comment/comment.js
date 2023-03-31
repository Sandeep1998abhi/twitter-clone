import "./comment.css";
import React, { useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
export default function Comment() {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const addComment = (text) => {
    const newComment = { text: text };
    setComments([...comments, newComment]);
  };

  return (
    <div className="Comment">
      <ChatBubbleOutlineIcon onClick={toggleComments}>
        {showComments ? "." : "."}
      </ChatBubbleOutlineIcon>
      {showComments && (
        <div>
          <div className="comment-box">
            {comments.map((comment, index) => (
              <div key={index}>{comment.text}</div>
            ))}
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const text = event.target.elements.comment.value;
              addComment(text);
              event.target.elements.comment.value = "";
            }}
          >
            <input
              type="text"
              name="comment"
              placeholder="Add a comment"
              className="add-comment"
            />
            <button type="submit" className="comment-btn">
              Comment
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
