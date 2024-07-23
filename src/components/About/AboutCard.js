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
            <br /> I recently graduated with a Bachelors in Computer Science and Engineering at <span className="purple">NIT Durgapur</span>, West Bengal. My passion is harnessing technology to address real-world challenges and drive meaningful change.
            <br />
            <br></br>
            I am currently, seeking Full Time Oppurtunities or Internships<span className="purple"> Full Stack Developement or Machine Learning </span>. With strong skills in MERN Stack Technology, Database Management, Salesforce Marketing Cloud and Machine Learning, I am excited to contribute to projects that push the boundaries of technology and innovation.
            <br />
            <br />
            In addition to coding, I have a range of interests that keep me motivated:
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
