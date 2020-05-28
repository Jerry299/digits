import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="digits-footer">
        <h3>
          digits<span style={{ color: "#f8b24f" }}>:</span>
        </h3>
        <p>
          Digits is a website template built to work seamlessly with the
          WordPress block editor to create beautifully designed pages in minutes
        </p>
      </div>
      <div className="pages">
        <div className="pages-wrapper">
          <h3 className="header" style={{ marginLeft: "40px" }}>
            Pages
          </h3>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/home">About</a>
            </li>
            <li>
              <a href="/home">News</a>
            </li>
            <li>
              <a href="/home">Pricing</a>
            </li>
            <li>
              <a href="/home">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="demos-wrapper">
        <h3 className="header" style={{ marginLeft: "40px" }}>
          Demos
        </h3>
        <ul>
          <li>
            <a href="/home">Classic</a>
          </li>
          <li>
            <a href="/home">Boxy</a>
          </li>
          <li>
            <a href="/home">Gradient</a>
          </li>
          <li>
            <a href="/hme">Minimal</a>
          </li>
          <li>
            <a href="/home">Night</a>
          </li>
        </ul>
      </div>
      <div className="resources">
        <h3 className="header">Resources</h3>
        <div className="icons">
          <i class="fa fa-facebook-official" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-globe" aria-hidden="true"></i>
          <i class="fa fa-envira" aria-hidden="true"></i>
        </div>
        <ul>
          <li>
            <a href="/home">Download Now</a>
          </li>
          <li>
            <a href="/home">Documentation</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
