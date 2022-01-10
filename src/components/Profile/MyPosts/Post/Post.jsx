import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        className={classes.ava}
        src="http://www.fillmurray.com/30/30"
        alt="ava"
      />
      <span> {props.name} </span>
      <p>{props.message}</p>
      <div>Like {props.likes}</div>
    </div>
  );
};

export default Post;
