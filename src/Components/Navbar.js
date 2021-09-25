import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navBar">
        <i class="fas fa-bars"></i>
        <ul>
          {/* <li>
            <Link to="">
              <i class="fa-solid fa-bars-staggered"></i>
            </Link>
          </li> */}

          <li>
            <Link to="">
              <i class="fas fa-window-maximize"></i>
            </Link>
          </li>
          <li>
            <Link to="/pageTwo">
              <i class="fas fa-user-cog"></i>
            </Link>
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
