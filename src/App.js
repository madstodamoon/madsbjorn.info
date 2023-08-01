import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./responsive.css";
import { useState } from "react";

//Prevents scrolling. Set to "auto" if needed

document.body.style.overflow = "hidden";

// Export

export default function App() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [buttonTextArchitect, setButtonText] = useState(
    "Mads Bjørn Christiansen"
  );

  function handleClick() {
    setButtonText(
      buttonTextArchitect === "Mads Bjørn Christiansen"
        ? "Mads Bjørn Christiansen*"
        : "Mads Bjørn Christiansen"
    );
    setIsFooterVisible(!isFooterVisible);
  }

  // Content starts here

  return (
    <>
      <>
        <div className="App">
          <h1>
            {" "}
            <span class="link-text" onClick={handleClick}>
              {buttonTextArchitect}
            </span>
            <a> conducts </a>
            <a> an </a> <a> architectural </a> <a> practice </a>{" "}
            <a> engaged </a> <a> independently </a> <a> and </a>{" "}
            <a> collaboratively </a> <a> within </a> <a> the </a> <a> realm </a>{" "}
            <a> of </a> <a> virtual </a> <a> and </a> <a> built </a>
            <a> environments </a> <a> . </a>
            <br />
            <br />
            <span
              className="link-text"
              onClick={() => (window.location = "mailto:studio@madsbjorn.info")}
            >
              studio@madsbjorn.info
            </span>
            <br />
            <a style={{ fontStyle: "italic" }}>Copenhagen</a>{" "}
            <a style={{ fontStyle: "italic" }}>,</a>{" "}
            <a style={{ fontStyle: "italic" }}>Denmark</a>
          </h1>
        </div>

        <div>
          {isFooterVisible && (
            <footer className="show-footer SlideInBottom">
              * Graduated from the Architectural Association (AA) in London
            </footer>
          )}
        </div>
      </>
    </>
  );
}
