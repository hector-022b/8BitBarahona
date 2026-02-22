import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A BRIEF <span className="purple"> INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
              I graduted from Tulane University SoPA with a 🎓 BS in
              Information Technology with a Concentration in Integrated App Development
              <br />
              <br />I am currently focused on mastering
              <i>
                <b className="purple"> Python, JavaScript,  </b> and <b className="purple"> Modern JavaScript Libraries and Frameworks </b>
               such as <b className="purple"> React.js and Next.js</b>
              </i>
              <br />
              <br />
              🌱 I am eager to continue learning and expanding my skillset. I am particularly interested
              in exploring <b className="purple">emerging technologies</b> and industry <b className="purple">trends </b>
              to stay at the forefront of the ever-evolving <b className="purple">tech world. </b>
              <br />
              <br />
              🌟 Eager to improve my technical skills and problem-solving abilities, I am actively seeking full-time
              employment and internships in <b className="purple">front-end development</b>. I am particularly excited
              about exploring <b className="purple">mobile/web development</b>, <b className="purple">bot automation</b>,
              and <b className="purple">AI</b>, where I see endless opportunities for innovation and growth.
              <br />
              <br />
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
            <h1>SOCIALS</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hector-022b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/hector_022b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hectorbarahona/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                {/*<a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>*/}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
