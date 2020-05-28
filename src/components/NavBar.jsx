import React from "react";
import "./Comp.css";

//helloo, the styling for this component is split between inline styling and the comp.css,we needed to optimuze
//also ignore the anchor tags that were used, we would replace with react-router-dom links soon
const NavBar = () => {
  return (
    <div className="navbar-wrapper">
      <nav>
        <div className="nav-brand">
          <h3 style={{ fontSize: "30.33px", color: "#1E266D" }}>
            <a>digits</a> <span style={{ color: "#FF2E6A" }}>:</span>
          </h3>
        </div>
        <div className="nav-items">
          <ul style={{ fontSize: "15px", marginTop: "43px", color: "#1E266D" }}>
            <li>
              <a>HomePages</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Company</a>
            </li>
            <li>
              <a>Pricing</a>{" "}
              <span>
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
              </span>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div
          className="nav-contact"
          style={{
            fontSize: "15px",
            marginTop: "30px",
            marginBottom: "30px",
            color: "  #1E266D;",
          }}
        >
          <p style={{ marginLeft: "50px", color: "#1E266D" }}>03883889929</p>
          <button style={{ marginRight: "50px" }}>Contact Us</button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
