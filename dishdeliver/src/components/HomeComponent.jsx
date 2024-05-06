import React from "react";
import { useEffect, useRef } from "react";
import image from "../profilePic.jpg";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.3 }}
    >
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
      <motion.div
        id="intro"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <p>
          <h3>A bit about me...</h3>A dynamic and ambitious individual with a
          passion for web development, specializing in MERN stack technologies.
          Equipped with hands-on experience of building responsive and
          interactive web applications. Possesses a solid foundation in
          programming fundamentals and eager to contribute to innovative
          projects and leverage academic knowledge to deliver high-quality
          solutions.
        </p>
      </motion.div>
      <motion.div
        class="timeline bg-green-100 bg-opacity-50 h-19 px-2 py-2"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <h1>Tech Experiences..</h1>
        <div class="mern rounded-lg bg-teal-100 bg-opacity-50 h-19 ">
          <h3>MERN Stack Development</h3>
          <div id="mern">
            <p>
              Embarked on a hands-on learning experience by building a MERN
              stack project. Gained practical knowledge through Hands-on
              experience building a full-stack web application using the MERN
              stack (MongoDB, Express, React, Node.js). Developed a
              comprehensive understanding of the MERN stack by building a
              hands-on project, including database design with MongoDB, backend
              API development with Express.js, frontend UI creation with
              React.js, and server-side logic with Node.js
            </p>
            <img
              id="mernImg"
              src="https://www.webhopers.com/wp-content/uploads/2021/05/MERN-Stack-Development-Company.png"
              alt="mern"
              width={"220px"}
            />
          </div>
        </div>
        <br />
        <div class="tec rounded-lg bg-teal-100 bg-opacity-50 h-19">
          <h3>Quantum Technology</h3>
          <div id="tec">
            <img
              id="tecImg"
              src="https://dcis.dot.gov.in/backend-asset/images/logo.png"
              alt="tecCert"
              height={"100px"}
              width={"280px"}
            />
            <p>
              Leveraged my role at the Department of Telecommunication (TEC) to
              engage in the testing and validation of next-generation Quantum
              Key Distribution (QKD) systems, ensuring secure communication with
              ultra-high encryption. Furthermore, I actively participated in
              working groups at ITU-T, IEEE, and ISO/IEC, contributing to the
              development of international standards for quantum communication
              protocols, shaping the future of secure data transmission
            </p>
          </div>
        </div>
        <br />
        <div class="android rounded-lg bg-teal-100 bg-opacity-50 h-19">
          <h3>Android App Development</h3>
          <div id="android">
            <p>
              Developed proficiency in Android app development using Kotlin
              through a virtual externship at SmartBridge. Successfully built a
              Kotlin-based Android application, gaining hands-on experience in
              mobile UI design, application logic implementation, and the
              Android development lifecycle. Adept Android app developer skilled
              in Kotlin programming. Utilized Kotlin to create high-performance
              apps leveraging Jetpack Compose for modern UI design and MVVM
              architecture for clean code separation
            </p>
            <img
              id="andImg"
              src="https://www.sufalamtech.com/wp-content/uploads/2023/11/Kotlin-banner-img.png"
              alt="android"
              width={"220px"}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
