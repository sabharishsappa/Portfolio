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
              endDate="Jun 24 (Intended)"
              role="Upcoming Global IT Intern"
              description="Excited to embark on my journey as an upcoming Global IT Intern at PepsiCo. Eager to contribute my technical expertise in areas such as NodeJS, ReactJS, and Database Management. Thrilled to be part of a dynamic team, collaborating on innovative solutions for real-world challenges."
            />

            <TimelineItem
              image={CelebalImg}
              company="Celebal Technologies"
              startDate ="May 23"
              endDate="Aug23"
              role="NodeJS Intern"
              description="Proficient in MERN Tech Stack Development, contributed to innovative tagging system implementation, secured a Gold Badge for exceptional performance."
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
              endDate="Present"
              role="Creative Head"
              description="supervising a team of 80+ people, Contributing to the design and development of the organization's website and guiding successful event organization."
            />


            <TimelineItem
              image={TedxImg}
              company="TEDx NIT Durgapur"
              startDate ="May 23"
              endDate="Present"
              role="Senior Executive"
              description="Organizing and Managing this prestigious event, collaborating on design and development of the organization's website, managing visual design initiatives for events."
            />

            <TimelineItem
              image={AarohanImg}
              company="Aarohan 2K23"
              startDate ="May 23"
              endDate="Present"
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
