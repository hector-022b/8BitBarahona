import React from "react";
import { Container } from "react-bootstrap";

import myImg from "../../Assets/avatar.png";

import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <section className="home-about-section" id="about-preview">
      <Container>
        <div className="home-about-grid">
          <div className="home-about-copy">
            <p className="home-about-eyebrow">A little about me</p>

            <h2 className="home-about-title">
              Building skills, solving problems, and
              <span className="home-about-accent"> creating useful software.</span>
            </h2>

            <div className="home-about-body">
              <p>
                I&apos;m an Information Technology graduate from Tulane University
                with a concentration in Integrated Application Development.
              </p>

              <p>
                My current focus is strengthening my skills in
                <strong className="home-about-accent">
                  {" "}JavaScript, React, Python, and modern web development
                </strong>
                , while continuing to explore automation and emerging technologies.
              </p>

              <p>
                I enjoy learning through hands-on projects, improving existing
                systems, and turning ideas into applications that are useful,
                reliable, and easy to understand.
              </p>
            </div>
          </div>

          <div className="home-about-visual">
            <div className="about-image-frame">
              <img
                src={myImg}
                className="about-image"
                alt="Illustration representing Hector Barahona"
              />
            </div>
          </div>
        </div>

        <div className="home-social-panel">
          <div className="home-social-copy">
            <p className="home-about-eyebrow">Let&apos;s connect</p>

            <h2 className="home-social-heading">
              Find me around the web.
            </h2>

            <p>
              Check out my projects, professional background, or connect with me.
            </p>
          </div>

          <ul className="home-about-social-links">
            <li>
              <a
                href="https://github.com/hector-022b"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>

            <li>
              <a
                href="https://x.com/hector_022b"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons"
                aria-label="X"
              >
                <AiOutlineTwitter />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/hectorbarahona/"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Home2;