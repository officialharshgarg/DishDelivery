import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from "../ticTacImg.png";
import img2 from "../bparms.png";
import img3 from "../foodRun.png";

const data = [
  {
    img: img1,
    title: "TicTacToe Game",
    description:
      "Seamlessly designed classic TicTacToe game with help of HTML, CSS and JS",
    link: `https://officialharshgarg.github.io/TicTacToe/`,
  },
  {
    img: img2,
    title: "Biometric Identification System",
    description: `Kotlin-based app that uses ML and blockchain, stores data which later helps us to identify them with
    face scan and save detail in blockchain so it can't be modified.`,
    link: `https://github.com/officialharshgarg/BPARMS_Face_recognition`,
  },
  {
    img: img3,
    title: "Food-runner",
    description: `multi-function app with features like a splash screen,
    robust login, managing credentials & data, calculating total amount, and a user-friendly GUI.`,
    link: `https://github.com/officialharshgarg/FoodRun`,
  },
];
const handleButtonClick = (link) => {
  window.open(link, "_blank"); // Opens link in a new tab
};
export default function ProjectComponent() {
  return (
    <div className="pro">
      {data.map((item) => (
        <Card
          style={{
            height: "23rem",
            width: "18rem",
            border: "2px solid gray",
            padding: "5%",
            borderRadius: "3%",
            marginRight:"3%"
          }}
        >
          <Card.Img
            variant="top"
            src={item.img}
            width={"250px"}
            height={"200px"}
            style={{
              boxSizing: "border-box",
              backgroundSize: "cover",
              marginBottom: "3%", border:"1px solid gray"
            }}
          />
          <Card.Body>
            <Card.Title style={{ fontFamily: "Roboto" }}>
              <b>{item.title}</b>
            </Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button
              variant="primary"
              onClick={() => handleButtonClick(item.link)}
              style={{border:"3px gray solid", borderRadius:"10px",fontFamily: "Segoe UI",padding: "7px"}}
            >
              Show File
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
