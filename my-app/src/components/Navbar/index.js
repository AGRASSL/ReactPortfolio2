import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Alexandra Grassl
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/About"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Work"
              className={window.location.pathname === "/Work" ? "nav-link active" : "nav-link"}
            >
              My Work
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Connect"
              className={window.location.pathname === "/Connect" ? "nav-link active" : "nav-link"}
            >
              Connect with Me!
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
