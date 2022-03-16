import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

import img from "./samsung-logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <img src={img} alt="logo" width="150" />
        <h2 className="junior">jr</h2>
      </Link>
    </div>
  );
};

export default Header;
