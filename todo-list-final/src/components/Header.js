import React from "react";
import Logo from "../images/Inventive-logo.png";

const Header = props => {
  return (
    <div>
      <div className="logo-container">
        <img src={Logo} />
      </div>
      <div className="title">Todo List</div>
    </div>
  );
};

export default Header;
