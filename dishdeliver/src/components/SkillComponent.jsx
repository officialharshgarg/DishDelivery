import React from "react";

export default function SkillComponent() {
  return (
    <div id="skill">
      <div id="headingSkill">
        <h1>
          <u>Explore My Skills</u>
        </h1>
      </div>
      <div id="skillCont1">
        <div className="row1" style={{ fontSize: "large" }}>
          <div>
            <h3>Frontend</h3>
            <br />
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>React Js</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>

        <div className="row1" style={{ fontSize: "large" }}>
          <h3>Backend</h3>
          <br />
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>RESTful API</li>
            <li>MongoDB</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div className="row1" style={{ fontSize: "large" }}>
          <h3>Core Subjects</h3>
          <br />
          <ul>
            <li>Dsa</li>
            <li>Java</li>
            <li>Computer Networks</li>
            <li>Oops</li>
            <li>Operating System</li>
            <li>Dbms</li>
          </ul>
        </div>
        <div className="row1" style={{ fontSize: "large" }}>
          <h3>Others</h3>
          <br />
          <ul>
            <li>Post Man</li>
            <li>Mongoose</li>
            <li>Git/Github</li>
            <li>Vs Code</li>
            <li>Redux</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
