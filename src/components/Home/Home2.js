import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section mt-0 pt-0" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description mt-0 pt-0">
            <h1 style={{ fontSize: "2em", textAlign: "left" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a passionated aspiring <span className="purple"> software developer, Machine Learning </span> Enthusiast with a strong background in web development and proficient in <span className="purple"> C++, C and Java </span>programming Languages. I specialize in <span className="purple">full-stack web development</span>, and I love bringing ideas to life in the digital world.
          <br></br>
          <br></br>
            I’m pursuing my Bachelor's degree in <span className="purple">Computer Science Engineering </span>in<span className="purple"> NIT Durgapur</span>, West Bengal, where I achieved a commendable <span className="purple">CGPA of 8.92</span>. had a solid understanding of computer science fundamentals such as Data Structures and Algorithms, Object-Oriented Programming, DBMS, Operating Systems, and Computer Networks.
            <br></br>
            <br></br>
              My technical skills include <span className="purple">Node.js, ReactJS, MongoDB, SQL</span>. I am constantly exploring new technologies and seeking to expand my knowledge to stay up-to-date with industry trends.
              <br></br>
              <br></br>
              In addition to my technical skills, I am a creative thinker with a keen eye for design. I enjoy turning complex problems into elegant and intuitive user experiences. Whether it's building a responsive website or developing a robust web application, I am always up for a challenge.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me and</h1>
            <p>
              Feel free to <span className="purple">connect </span> with me in
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sabharishsappa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sabharishsappa/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:sappasabharish@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
