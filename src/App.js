import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./responsive.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        {" "}
        <a> Mads </a> <a> Bjørn </a> <a> Christiansen </a> <a> is </a>
        <a> an </a> <a> independent </a> <a> architect </a> <a> engaged </a>
        <a> globally </a> <a> within </a> <a> the </a> <a> realms </a>
        <a> of </a> <a> virtual </a> <a> and </a> <a> built </a>
        <a> envirronments </a> . <a> All </a> <a> inquiries </a> <a> to </a>{" "}
        <span
          onClick={() => (window.location = "mailto:studio@madsbjorn.info")}
        >
          studio@madsbjorn.info
        </span>
      </h1>
    </div>
  );
}
