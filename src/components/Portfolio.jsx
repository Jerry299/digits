import React from "react";
import img from "../img/browser.png";
import img2 from "../img/browser1.png";
import img3 from "../img/browser3.png";
import img4 from "../img/browser4.png";
import img5 from "../img/browser5.png";
import img6 from "../img/browser6.png";
import img7 from "../img/browser7.png";
import img8 from "../img/browser8.png";
import img9 from "../img/browser9.png";
import img10 from "../img/browser10.png";
import img11 from "../img/browser11.png";

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-texts">
        <h2>Simplicity Meets Innovative Designs</h2>
        <p>
          It's really easy to start using digits,Install the theme,choose a demo
          and start designing the future of your business
        </p>
        <button className="porfolio-btn">Buy Digits</button>
      </div>
      <div className="portfolio-imgs">
        <div className="first5">
          <div className="img img1">
            <img src={img} alt="" />
          </div>
          <div className="img img2">
            <img src={img2} alt="" />
          </div>
          <div className="img img11">
            <img src={img11} alt="" />
          </div>
          <div className="img img3">
            <img src={img3} alt="" />
          </div>

          <div className="img img4">
            <img src={img4} alt="" />
          </div>
        </div>
        {/* first5 ends here */}
        <div className="second5">
          <div className="img img5">
            <img src={img5} alt="" />
          </div>

          <div className="img img6">
            <img src={img6} alt="" />
          </div>
          <div className="img img7">
            <img src={img7} alt="" />
          </div>
          <div className="img img8">
            <img src={img8} alt="" />
          </div>
          <div className="img img9">
            <img src={img9} alt="" />
          </div>
        </div>
        <div className="img img10">
          <img src={img10} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
