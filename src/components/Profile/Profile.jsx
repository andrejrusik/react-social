import React from "react";
import MyPosts from './MyPosts/MyPosts'
import classes from  './Profile.module.css';

const Profile = () => {
  return (
    <main className={classes.content}>
        <div>
          <img
            className={classes.slide}
            src="http://www.fillmurray.com/700/200"
            alt="fill"
          />
        </div>
        <div className={classes.me}>ava  discription</div>
        <MyPosts />
      </main> 
  );
};

export default Profile;


