import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <a className="pl-5" href="/">
          <img src="/assets/images/logo.png" height="60" alt="LBG" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
