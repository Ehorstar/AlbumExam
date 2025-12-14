import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav style={{ display: "flex", gap: "10px" }}>
        <NavLink to="/">
          <span>Home</span>
        </NavLink>

        <NavLink to="albums">
          <span>Albums</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
