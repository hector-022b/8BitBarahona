import React from "react";
import { Container } from "react-bootstrap";

import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-content">
          <div className="footer-brand">
            <p className="footer-name">Hector Barahona</p>

            <p className="footer-tagline">
              Building, learning, and creating one project at a time.
            </p>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/hector-022b"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <AiFillGithub />
            </a>

            <a
              href="https://x.com/hector_022b"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="X"
            >
              <AiOutlineTwitter />
            </a>

            <a
              href="https://www.linkedin.com/in/hectorbarahona/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Hector Barahona</p>

          <p>Designed and built by Hector Barahona.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;