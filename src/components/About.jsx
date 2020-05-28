import React from "react";
import img2 from "../img/image 2.png";
import img3 from "../img/image 3.png";
import img4 from "../img/image 4.png";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-text">
        <p style={{ textAlign: "center", fontSize: "48px" }}>
          Whatever work we do, we're able to help
        </p>
      </div>

      <div className="about-desc">
        <div className="desc-imgs">
          <div className="div4">
            <p
              style={{
                width: "210px",
                height: "224px",
                zIndex: "1",
                background: "#999FE3",
              }}
            ></p>
            <img
              id="p1"
              src={img4}
              style={{ width: " auto", height: " 390px" }}
              alt=""
            />
          </div>

          <div className="div3">
            <p></p>
            <img id="p2" src={img3} alt="" />
          </div>

          <div className="div2">
            <p></p>
            <img id="p3" src={img2} alt="" />
          </div>
        </div>
        <div className="desc-texts">
          <div className="txt">
            <div>
              <header>Designs and Assets</header>
              <p>
                Make Your Brand Stand Out with pixel-perfect design crafted to
                perfection
              </p>
            </div>
            <div className="bullet one"></div>
          </div>
          <hr />
          <div className="txt">
            <div>
              <header>Easy Content</header>
              <p>
                Import your Demos or Build Pages visually,Bonus all image and
                illusration included.
              </p>
            </div>
            <div className="bullet two"></div>
          </div>
          <hr />
          <div className="txt">
            <div>
              <header>Fast And Reliable</header>
              <p>
                No Heavy-Weight plugins,No Builders,No un-neccessary file
                loading,Pure React.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
