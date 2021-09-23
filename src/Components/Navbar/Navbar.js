import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navBar">
        <i class="fas fa-bars"></i>
        <ul>
          <li>
            <i class="fa-solid fa-bars-staggered"></i>
          </li>

          <li>
            <i class="fas fa-window-maximize"></i>
          </li>
          <li>
            <i class="fas fa-user-cog"></i>
          </li>
          <li>
            <i class="fas fa-cog"></i>
          </li>
          <li>
            <i class="fas fa-chart-bar"></i>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
