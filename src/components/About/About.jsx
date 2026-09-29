import React from "react";
import { Container } from "react-bootstrap";

import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import AboutCard from "./AboutCard";

import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <main className="about-section">
      <Particle />

      <Container className="about-content">
        <section className="about-hero">
          <div className="about-copy">
            <p className="section-eyebrow">About me</p>

            <h1 className="about-title">
              Developer, problem solver, and
              <span className="about-title-accent"> lifelong learner.</span>
            </h1>

            <AboutCard />
          </div>

          <div className="about-visual">
            <div className="about-page-image-frame">
              <img
                src={laptopImg}
                alt="Developer working at a laptop"
                className="about-page-image"
              />
            </div>
          </div>
        </section>

        <section className="about-skills-section">
          <div className="section-heading">
            <p className="section-eyebrow">Technologies</p>

            <h2>
              Professional <span>Skillset</span>
            </h2>

            <p>
              Languages and technologies I&apos;ve worked with through projects,
              coursework, and continued learning.
            </p>
          </div>

          <Techstack />
        </section>

        <section className="about-tools-section">
          <div className="section-heading">
            <p className="section-eyebrow">Workflow</p>

            <h2>
              Tools I <span>Use</span>
            </h2>

            <p>
              Tools and platforms I use for development, design, deployment,
              and everyday technical work.
            </p>
          </div>

          <Toolstack />
        </section>

        <section className="about-github-section">
          <Github />
        </section>
      </Container>
    </main>
  );
}

export default About;