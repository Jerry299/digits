import React from "react";
import bg from "../img/Graphic.png";

//still continue with our pattern
//helloo, the styling for this component is split between inline styling and the comp.css,we needed to optimize it
//inline styling was used more here
const MainPage = () => {
  return (
    <div className="mainpage-wrapper">
      <div className="texts-wrapper">
        <div className="texts" style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: "56px",
              width: "590px",
              height: "120px",
              marginLeft: "380px",
            }}
          >
            Good designs meets great user experience
          </h1>
          <p
            style={{
              fontSize: "18px",
              width: "500px",

              marginLeft: "440px",
            }}
          >
            For everyone,from beginners to experts.
          </p>
          <div
            className="text-btn"
            style={{
              fontSize: "18px",
              width: "500px",
              marginLeft: "440px",
            }}
          >
            <button className="blue-btn">Buy Digits</button>
            <button className="white-btn"> See Features</button>
          </div>
        </div>
      </div>
      <div
        className="bg"
        style={{
          backgroundImage: `url(${bg})`,
          boxShadow: "0px 2px 2px #1b1b2f",
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
};

export default MainPage;
