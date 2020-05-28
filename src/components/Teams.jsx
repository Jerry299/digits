import React from "react";
import logo1 from "../img/logo-1.png";
import logo2 from "../img/logo-2.png";
import logo3 from "../img/logo-3.png";
import logo4 from "../img/logo-4.png";
import logo5 from "../img/logo-5.png";
import logo6 from "../img/logo-6.png";
import logo7 from "../img/logo-7.png";

const Teams = () => {
  return (
    <div className="teams-wrapper">
      <div className="teams-text">
        <p>Trusted by forward thinking software teams in the world</p>
      </div>
      <div className="teams">
        <div className="team">
          {" "}
          <img src={logo1} alt="" />
        </div>
        <div className="team">
          {" "}
          <img src={logo2} alt="" />
        </div>
        <div className="team">
          {" "}
          <img src={logo3} alt="" />
        </div>
        <div className="team">
          {" "}
          <img src={logo4} alt="" />
        </div>
        <div className="team">
          {" "}
          <img src={logo5} alt="" />
        </div>
        <div className="team">
          {" "}
          <img src={logo6} alt="" />
        </div>
        <div className="team">
          {" "}
          <img src={logo7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Teams;
