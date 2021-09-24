import React from "react";
import Avatar from "../Images/avatar.png";

const Header = () => {
  return (
    <div className="header">
      <div className="searchBar">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search"></input>
      </div>
      <span className={{ fontsize: "16px", fontWeight: "500" }}>
        Lorem ipsum
      </span>
      <span className={{ fontsize: "16px", fontWeight: "500" }}>
        Lorem ipsum
      </span>
      <span className={{ fontsize: "16px", fontWeight: "500" }}>
        Lorem ipsum
      </span>
      <i class="fas fa-comment"></i>
      <i class="fas fa-bell"></i>
      <div className="user">
        <img src={Avatar}></img>
        <span>John Smith</span>
        <i class="fas fa-caret-down"></i>
      </div>
    </div>
  );
};

export default Header;
