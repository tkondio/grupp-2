import React from "react";
import "./Navbar.css";
import { useLocation, Link } from "react-router-dom";
import NavigationPath from "../models/NavigationPath";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="title">Sussikaubamaja SINU SUSS</div>
      <div className="pages">
        {NavigationPath.map((el, idx) => (
          <Link
            className="link"
            to={el.path}
            key={idx}
            style={{
              color: "white",
              textDecoration:
                location.pathname === el.path ? "underline" : "none",
            }}
          >
            {el.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
