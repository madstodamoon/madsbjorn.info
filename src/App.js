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
  const [buttonTextArchitect, setButtonText] = useState("architect");

  function handleClick() {
    setButtonText(
      buttonTextArchitect === "architect" ? "architect*" : "architect"
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
            <a> Mads </a> <a> Bjørn </a> <a> Christiansen </a> <a> is </a>
            <a> an </a> <a> independent </a>
            <span class="link-text" onClick={handleClick}>
              {buttonTextArchitect}
            </span>
            <a> engaged </a>
            <a> globally </a> <a> within </a> <a> the </a> <a> realms </a>
            <a> of </a> <a> virtual </a> <a> and </a> <a> built </a>
            <a> environments </a> .
            <br />
            <a> All </a> <a> inquiries </a> <a> to </a>{" "}
            <span
              class="link-text"
              onClick={() => (window.location = "mailto:studio@madsbjorn.info")}
            >
              studio@madsbjorn.info
            </span>
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
