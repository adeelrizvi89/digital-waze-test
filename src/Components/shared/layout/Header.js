import React from "react";
import Avatar from "../.././../Images//avatar.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="searchBar">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search"></input>
        </div>
        <span style={{ fontSize: "14px", fontWeight: "500", color: "#8f8f8f" }}>
          Lorem ipsum
        </span>
        <span style={{ fontSize: "14px", fontWeight: "500", color: "#8f8f8f" }}>
          Lorem ipsum
        </span>
        <span style={{ fontSize: "14px", fontWeight: "500", color: "#8f8f8f" }}>
          Lorem ipsum
        </span>
        <i class="fas fa-comment"></i>
        <i class="fas fa-bell"></i>
        <div className="user">
          <img src={Avatar}></img>
          <span style={{ fontSize: "12px" }}>John Smith</span>
          <i class="fas fa-caret-down"></i>
        </div>
      </div>
    </>
  );
};

export default Header;
