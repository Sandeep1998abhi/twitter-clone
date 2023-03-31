import Avatar from "@mui/material/Avatar";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PublishIcon from "@mui/icons-material/Publish";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import Like from "../Like/Like";
import Comment from "../comment/comment";
import React, { forwardRef } from "react";
import "./Post.css";
const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                displayName
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />}@
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <h4>{text}</h4>
            </div>
          </div>
          <img src={image} alt="" className="post-img" />
          <div className="post__footer">
            <Comment className="post-footer-icon1" />
            <RepeatIcon className="post-footer-icon" />
            <Like className="post-footer-icon" />
            <PublishIcon className="post-footer-icon" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
