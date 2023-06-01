import React, { Component } from "react";

const Like = (props) => {
  let likeClass = "fa fa-heart";
  if (!props.liked) likeClass += "-o";
  return (
    <i
      onClick={props.onLike}
      style={{ cursor: "pointer" }}
      className={likeClass}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
