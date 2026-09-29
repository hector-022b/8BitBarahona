import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import { useTheme } from "../../context/ThemeContext";

import homeLogo from "../../Assets/home-main.jpg";

import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const { theme } = useTheme();

const heroLabel =
  theme === "crimson-static"
    ? "TYPEWRITTEN FILE // H. BARAHONA"
    : theme === "cyber-sunset"
      ? "SYSTEM ONLINE // HB"
      : "> hello_world_";
  
  return (
    <section>
      <section className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="hero-row">
            <Col lg={7} className="hero-copy">
              <p className="hero-terminal">
                {heroLabel}

                {theme !== "crimson-static" && (
                  <span className="hero-cursor">_</span>
                )}
              </p>

              <p className="hero-greeting">
                Hello, I&apos;m Hector. <span aria-hidden="true">👋</span>
              </p>

              <h1 className="hero-title">
                I build <span className="hero-accent">web experiences</span>
                <br />
                and software.
              </h1>

              <p className="hero-description">
                Software developer focused on building useful, modern, and
                accessible applications while continuing to grow across web
                development, automation, and emerging technologies.
              </p>

              <div className="hero-typewriter">
                <Type />
              </div>

              <div className="hero-actions">
                <Link to="/project" className="hero-button hero-button-primary">
                  View Projects
                </Link>

                <Link to="/resume" className="hero-button hero-button-secondary">
                  View Resume
                </Link>
              </div>
            </Col>

            <Col lg={5} className="hero-visual">
              <div className="hero-image-frame">
                <img
                  src={homeLogo}
                  alt="Hector Barahona"
                  className="hero-image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Home2 />
    </section>
  );
}

export default Home;