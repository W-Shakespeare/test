import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="menu">
        <li className="menu-item">
          <a href="#">Menu</a>
        </li>
        <li className="menu-item">
          <a href="#">Catering</a>
        </li>
        <li className="menu-item">
          <a href="#">About Us</a>
        </li>
        <li className="menu-item">
          <Link
            to={{
              pathname: "/Contact/Contact/"
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
