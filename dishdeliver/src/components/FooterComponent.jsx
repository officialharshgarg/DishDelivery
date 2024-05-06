import React from "react";

export default function FooterComponent() {
  return (
    <div class=" footer footbg px-14">
      <div class="app-container0  ">
        <pre style={{ fontFamily: "Kanit" }}>
          <h1>
            Have some dream projects?
            <br />
            Let's make them a reality together!
          </h1>
        </pre>
      </div>
      <div class="app-container">
        <h2>
          <u><b>Contact Me</b></u>
        </h2>
        <ul>
          <b>E-Mail</b>
          <li>
            <a class="footCont" href="mailto:harshgarg698@gmail.com">
              harshgarg698@gmail.com
            </a>
          </li>
          <br />
          <b>LinkedIn Id</b>
          <li>
            <a
              class="footCont"
              href="https://www.linkedin.com/in/iofficialharshgarg/"
              target="parent"
            >
              iofficialharshgarg
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
