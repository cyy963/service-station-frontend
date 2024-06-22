import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/find-station">Find a Station</Link>
          </li>
          <li>
            <Link to="/journey-planner">Journey Planner</Link>
          </li>
          <li>
            <Link to="/store-information">Store Information</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
