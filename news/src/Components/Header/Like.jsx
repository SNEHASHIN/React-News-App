import React, { useState } from "react";
import "./Like.css"

const LikeDeslike = () => {
    const [like, setlike] = useState(0);
    const [dislike, setdislike] = useState(0);
    const [likeactive, setlikeactive] = useState(false);
    const [dislikeactive, setdislikeactive] = useState(false);
  

  function likef() {
    if (likeactive) {
      setlikeactive(false);
      setlike(like - 1);
    } else {
      setlikeactive(true);
      setlike(like + 1);
      if (dislikeactive) {
        setdislikeactive(false);
        setlike(dislike - 1);
        setdislike(dislike - 1);
      }
    }
  }
  function dislikef() {
    if (dislikeactive) {
      setdislikeactive(false);
      setdislike(dislike + 1);
    } else {
      setdislikeactive(true);
      setdislike(dislike - 1);
      if (likeactive) {
        setlikeactive(false);
        setdislike(dislike + 1);
        setlike(like - 1);
      }
    }
  }

  return (
    <>
      <button onClick={likef}>Like {like} </button>
      <button onClick={dislikef}>Dislike {dislike}</button>
    </>
  );
};
export default LikeDeslike;
