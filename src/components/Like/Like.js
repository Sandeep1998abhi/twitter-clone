import "./Like.css";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Like() {
  const [like, setLike] = useState(3);
  const [isLike, setIsLike] = useState(false);
  const onLikeButtonClick = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  };
  return (
    <div className="like_btn">
      <span
        style={{
          color: isLike ? "red" : ""
        }}
      >
        <FavoriteBorderIcon className="like" onClick={onLikeButtonClick} />
      </span>
      <span className="text-dark">{like}</span>
    </div>
  );
}
