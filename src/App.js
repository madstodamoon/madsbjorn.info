import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./responsive.css";
import { useState } from "react";

//Prevents scrolling. Set to "auto" if needed

document.body.style.overflow = "hidden";

// Export

export default function App() {
  //onclick events

  const initialText = "architect";
  const [buttonTextArchitect, setButtonText] = useState(initialText);

  function handleClick() {
    setButtonText("architect*");

    setTimeout(() => {
      setButtonText(initialText);
    }, 20000); // 👈️ change text back after 1 second
  }

  //Changes status bar color on devices?

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
            <a> envirronments </a> .
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
          <footer> * Test </footer>
        </div>
      </>
    </>
  );
}
