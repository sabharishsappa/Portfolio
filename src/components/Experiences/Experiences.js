import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import TimelineItem from './TimeLineItem';
import './TimelineComponent.css';
import CelebalImg from "../../Assets/Experiences/CT.png";
import SAEImg from "../../Assets/Experiences/SAE.png";
import AarohanImg from "../../Assets/Experiences/Aarohan.png";
import TedxImg from "../../Assets/Experiences/Tedx.png";
import PepsiCO from "../../Assets/Experiences/PepsiCo.png"


const TimelineComponent = () => {
  return (

    <Container fluid className="project-section">
      <Particle/>

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work Experiences - </strong>
        </h1>
        {/* <p style={{ color: "white" }}>
           I've worked on recently in 
        </p> */}

    <div className="container">
      <div className="row">
        <div className="col-12 mt-4 pt-2">
          <div className="timeline-page position-relative">
            <TimelineItem
              image={PepsiCO}
              company="PepsiCo GBS Hyd"
              startDate ="Jan 24"
              endDate="July 24"
              role="SDE Intern"
              description="As a Salesforce Development Intern at PepsiCo, I utilized full stack web development to address marketing cloud challenges by creating custom activity applications, SFMC Cloud Pages, and automation dashboards. I developed two-layer security applications and custom activities, completing their proof of concept to enhance marketing efforts' ROI across various countries."
            />

            <TimelineItem
              image={CelebalImg}
              company="Celebal Technologies"
              startDate ="May 23"
              endDate="Aug 23"
              role="NodeJS Intern"
              description="During my internship, I proficiently utilized the MERN tech stack to enhance the application, managing databases with MongoDB, handling server-side logic with Node.js, and creating dynamic user interfaces with React. I also implemented an innovative tagging system for status cards, earning a Gold Badge for exceptional performance."
            />
          </div>
        </div>
      </div>
    </div>

    </Container>
    <Container className="mt-5">
        <h1 className="project-heading">
         My Position of <strong className="purple">Responsibilities -</strong>
        </h1>
        <p style={{ color: "white" }}>
           I'm also an active member in the following
        </p>

    <div className="container">
      <div className="row justify-content-center">
        
      </div>

      <div className="row">
        <div className="col-12 mt-4 pt-2">
          <div className="timeline-page position-relative">
            <TimelineItem
              image={SAEImg}
              company="SAE India Collegiate club"
              startDate ="May 23"
              endDate="May 24"
              role="Creative Head"
              description="supervising a team of 80+ people, Contributing to the design and development of the organization's website and guiding successful event organization."
            />


            <TimelineItem
              image={TedxImg}
              company="TEDx NIT Durgapur"
              startDate ="May 23"
              endDate="May 24"
              role="Senior Executive"
              description="Organizing and Managing this prestigious event, collaborating on design and development of the organization's website, managing visual design initiatives for events."
            />

            <TimelineItem
              image={AarohanImg}
              company="Aarohan 2K23"
              startDate ="May 23"
              endDate="May 24"
              role="Senior Fest Coordinator"
              description="Managing the Largest Annual Tech fest by Cordinating with other clubs, Designing and execution of the many tech events engaging 250+ participants, receiving positive feedback for effective execution, and contributing significantly to the event's success and memorable experience."
            />
          </div>
        </div>
      </div>
    </div>

    </Container>
    </Container>
  );
};

export default TimelineComponent;
