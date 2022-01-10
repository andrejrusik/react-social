import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      my post
      <div>new post</div>
      <div>
        old posts
        <Post name='Hulio' message='lorem ipsum 3 vfdw  vfs v va fv ' likes  = ' 115'/>
        <Post name='John' message='lo vfdw  vfs v va fv ' likes  = ' 15' />
        <Post name='Ferge' message='ghgjh df;l ksd ;lk;lsd fl;k;lksd fok;lksd florem ipsum 3 vfdw  vfs v va fv ' likes  = '5' />
      </div>
    </div>
  );
};

export default MyPosts;
