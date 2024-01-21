import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <ul className="navbar_item">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
