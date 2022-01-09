import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          {" "}
          <a href="#">profiles</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Messages</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">News</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Music</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Settings</a>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
