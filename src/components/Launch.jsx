import React from "react";

const Launch = () => {
  return (
    <div className="launch-wrapper">
      <div className="launch">
        <header>Ready to launch your next website?</header>
        <div className="get-in-touch">
          <button>
            <i
              className="fa fa-envelope-open"
              aria-hidden="true"
              style={{
                color: "  #53C07E",
                backgroundColor: " #fff",
                margin: "0px 5px",
              }}
            ></i>
            Get In Touch Now
          </button>
          <p>
            Or,take a peek inside our{" "}
            <span style={{ color: "#f8b24f" }}>studio design</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Launch;
