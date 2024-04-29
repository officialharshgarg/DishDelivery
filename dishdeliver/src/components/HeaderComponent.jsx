import React from "react";
import { useEffect, useRef } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
export default function HeaderComponent() {
  const linkedinButtonRef = useRef(null);
  const gitButtonRef = useRef(null);

  useEffect(() => {
    const downloadButton = linkedinButtonRef.current;
    if (downloadButton) {
      downloadButton.addEventListener("click", () => {
        const documentUrl = "https://www.linkedin.com/in/iofficialharshgarg/";
        const link = document.createElement("a");
        link.href = documentUrl;
        link.download = "HarshResume.pdf";
        link.target = "_blank";
        link.click();
      });
    }
  }, []);

  useEffect(() => {
    const gitButton = gitButtonRef.current;
    if (gitButton) {
      gitButton.addEventListener("click", () => {
        const documentUrl =
          "https://github.com/officialharshgarg/officialharshgarg";
        const link = document.createElement("a");
        link.href = documentUrl;
        link.download = "HarshResume.pdf";
        link.target = "_blank";
        link.click();
      });
    }
  }, []);
  return (
    <div id="Header">
      <div id="Home">
        <NavLink
          style={{ textDecoration: "none" }}
          exact
          to="/"
          activeClassName="active"
        >
          <h2>
            <span style={{ textDecoration: "none" }} class="headCont">
              &lt;/
            </span>
            HARSH
            <span style={{ textDecoration: "none" }} class="headCont">
              &gt;
            </span>
          </h2>
        </NavLink>
      </div>
      <div class="headerContent">
        <NavLink id="nav" exact to="/About" activeClassName="active">
          About
        </NavLink>

        <NavLink id="nav" exact to="/Skills" activeClassName="active">
          Skills
        </NavLink>

        <NavLink id="nav" exact to="/Project" activeClassName="active">
          Project
        </NavLink>
      </div>
      <div class="btnHeader">
        <button id="btnHeader" ref={linkedinButtonRef}>
          LinkedIn
        </button>
        <button id="btnHeader" ref={gitButtonRef}>
          GitHub
        </button>
      </div>
    </div>
  );
}
