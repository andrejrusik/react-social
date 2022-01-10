import React from "react";
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src="http://www.fillmurray.com/30/30" alt="logo" />
    </header>
  );
};

export default Header;
