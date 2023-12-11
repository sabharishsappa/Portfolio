import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left", marginRight:"100px"}}>
            Hi Everyone, I am <span className="purple">Sabharish Sappa </span>
            from <span className="purple">Visakhapatnam, India.</span>
            <br /> Pursuing my Bachelors in Computer Science and Engineering at <span className="purple">NIT Durgapur</span>, West Bengal, I am committed to leveraging technology to solve real-world challenges.
            <br />
            <br></br>
            Currently, I am an Upcoming <span className="purple">Global IT Intern </span> at
            <span className="purple">PepsiCo</span>. Excited to contribute my skills in areas such as NodeJS, ReactJS, and Database Management to enhance PepsiCo's IT.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Graphics Designing 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing
            </li>
          </ul>
          <br></br>
          <p style={{ color: "rgb(155 126 172)" ,textAlign: "justify", fontWeight:"normal"}}>
            "Strive to build things with technology that makes a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
