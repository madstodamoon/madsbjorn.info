import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./responsive.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        {" "}
        <a> Studio </a> <a> Mads </a> <a> Bjørn </a> <a> Christiansen</a>.{" "}
        <a> All </a> <a> enquiries </a> <a> to </a>{" "}
        <a onClick={() => (window.location = "mailto:studio@madsbjorn.info")}>
          studio@madsbjorn.info
        </a>
      </h1>
    </div>
  );
}
