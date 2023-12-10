import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import natours from "../../Assets/Projects/Natours.png";
import mlProject from "../../Assets/Projects/medicineRecommendation.png"

import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={natours}
              isBlog={false}
              title="Natours - Tour Booking API"
              description="Developed a robust RESTful API with advanced functionalities, including geospatial queries, secure credit card payments, file uploading, image processing, and email notifications using technologies like MongoDB, Stripe, and Node Mailer."
              ghLink="https://github.com/sabharishsappa/Tours"
              demoLink="https://natours-api-by-sabharish.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify - A Real Time Chatting App"
              description="Developed a Real-Time Chatting Web Application with NodeJS, MongoDB, and ReactJS, featuring seamless instant messaging through Socket.io, enhanced security with user authentication, and deployment on Render."
              ghLink="https://github.com/sabharishsappa/ChattingApp"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mlProject}
              isBlog={false}
              title=" Medicine Recommendation System"
              description="Developing a user-friendly medicine recommendation system using Machine Learning, specifically vector algorithms, to suggest alternative medicines based on descriptions and reasons, addressing common challenges in medication decisions."
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
