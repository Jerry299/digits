import React from "react";
import p1 from "../img/image 5.png";
import p2 from "../img/image 6.png";
import p3 from "../img/image 7.png";

const Testimony = () => {
  return (
    <div className="testimony-wrapper">
      <header className="testimony-header">
        <h2>What others are saying</h2>
      </header>
      <div className="testimony">
        <div className="person-testimony">
          <p>
            Completely beautiful website and amazing support! This is my second
            website from this author and i love both of the sites so much and
            she helped me so well when i needed it
          </p>
          <figure>
            <img src={p1} alt="" />
            <figcaption>tempy.club</figcaption>
          </figure>
        </div>
        <div className="person-testimony">
          <p>
            Really easy to use and customise, easy to understand.Darinka helped
            me up with the site! She answers very quickly,a good service ,Thank
            you very much!
          </p>
          <figure>
            <img src={p2} alt="" />
            <figcaption>tempy.club</figcaption>
          </figure>
        </div>
        <div className="person-testimony">
          <p>
            Really pleasing to look at, Documentation(Including installation
            instructions) are clear and that's coming from a relatively new
            React User.
          </p>
          <figure>
            <img src={p3} alt="" />
            <figcaption>tempy.club</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
