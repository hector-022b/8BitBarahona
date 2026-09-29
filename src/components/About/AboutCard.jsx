import React from "react";
import Card from "react-bootstrap/Card";

import {
  FaGraduationCap,
  FaSeedling,
  FaLaptopCode,
  FaFutbol,
  FaPlane,
} from "react-icons/fa";

import { MdEmojiPeople } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div className="about-card-content">
          <p className="about-intro">
            👋 Hi! I&apos;m <strong>Hector Barahona</strong>, originally from
            the San Francisco Bay Area. I enjoy solving problems, learning new
            technologies, and building things that are useful.
          </p>

          <div className="about-highlights">
            <div className="about-highlight">
              <div className="about-highlight-icon">
                <FaGraduationCap />
              </div>

              <div>
                <h3>🎓 Information Technology Graduate</h3>

                <p>
                  I graduated from Tulane University SoPA with a BS in
                  Information Technology and a concentration in Integrated
                  Application Development.
                </p>
              </div>
            </div>

            <div className="about-highlight">
              <div className="about-highlight-icon">
                <MdEmojiPeople />
              </div>

              <div>
                <h3>🚀 Proud First-Generation Graduate</h3>

                <p>
                  As a first-generation university graduate, I&apos;m proud to
                  have achieved this milestone and of the path that brought me
                  into technology.
                </p>
              </div>
            </div>
          </div>

          <div className="about-focus">
            <FaSeedling className="about-focus-icon" />

            <div>
              <p className="about-focus-label">🌱 Always Learning</p>

              <p>
                I&apos;m continuing to expand my skill set through hands-on
                projects and continuous learning. I&apos;m especially interested
                in <strong>web and software development</strong>,{" "}
                <strong>automation</strong>, and <strong>AI</strong>, and I enjoy
                exploring technologies that challenge me to grow as a developer
                and problem solver.
              </p>
            </div>
          </div>

          <div className="about-interests">
            <p className="about-interests-label">
              <FaLaptopCode />
              🎮 Outside of tech
            </p>

            <div className="about-interest-list">
              <span>
                <FaFutbol />
                Soccer
              </span>

              <span>
                <GiBookshelf />
                Anime
              </span>

              <span>
                <FaPlane />
                Traveling
              </span>
            </div>
          </div>

          <blockquote className="about-quote">
            <p>&ldquo;Make your own path and change the world around you.&rdquo;</p>
            <cite>— Naruto Uzumaki</cite>
          </blockquote>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;