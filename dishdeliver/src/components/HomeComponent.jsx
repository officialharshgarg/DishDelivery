import React from "react";
import { useEffect, useRef } from "react";
import image from "../profilePic.jpg";
export default function HomeComponent() {
  const resumeButtonRef = useRef(null);

  useEffect(() => {
    const downloadButton = resumeButtonRef.current;
    if (downloadButton) {
      downloadButton.addEventListener("click", () => {
        const documentUrl =
          "https://drive.google.com/file/d/1oXhHW8CVTHVBG_Thzu7w3MJ0NYwL_tc4/view?usp=sharing";
        const link = document.createElement("a");
        link.href = documentUrl;
        link.download = "HarshResume.pdf";
        link.target = "_blank";
        link.click();
      });
    }
  }, []);

  return (
    <>
      <div class="HomeComp">
        <div class="profile">
          <img
            class="profileSec"
            src={image}
            height="350"
            width="310"
            alt="profile pic"
          />
        </div>
        <div id="proCont">
          <h5
            style={{ fontSize: "34px", fontFamily: "Anta", color: "#85586F" }}
          >
            Welcome, I'm
            <br />{" "}
            <h3
              style={{
                fontFamily: "Kanit",
                display: "inline",
                color: "#003C43",
              }}
            >
              HARSH GARG
            </h3>
            <br />
            Software Developer
            <br />
            <button id="resBtn" ref={resumeButtonRef}>
              Download Resume
            </button>
          </h5>
        </div>
      </div>
      <br />
      <div id="intro">
        <p>
          <h3>A bit about me...</h3>
          A dynamic and ambitious individual with a
          passion for web development, specializing in MERN stack technologies.
          Equipped with hands-on experience of building responsive and
          interactive web applications. Possesses a solid foundation in
          programming fundamentals and eager to contribute to innovative
          projects and leverage academic knowledge to deliver high-quality
          solutions.
        </p>
      </div>
    </>
  );
}
