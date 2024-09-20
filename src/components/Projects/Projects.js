import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
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
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Dodger"
              description="Created my version of Dodger, a game where the player has to avoid falling objects. The player can move using the arrow keys or mouse. A score and top score are kept."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bomb Maze"
              description="In this project I reskinned someone else's code to create my own game.  This game has a start phase, a play phase, and a game over phase. The player must navigate through the maze while dodging the bombs (the bombs are endless). There will be three rooms the player can play in. There is no time limit for the player to clear the room and the rooms loop."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AlienMan"
              description="Created my version of hangman. Learned to include a dictionary so there could be multiple word categories."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Assignment Portfolio Website"
              description="Created a class projects website using HTML and CSS for a clean and straightforward showcase of academic work. The website features organized sections for different projects, maintaining a responsive design for various screen sizes."
              // ghLink=""
              demoLink="https://cpst.tulane.edu/~hbarahona/CPST2400StudentWebsiteStarterFiles/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Capstone"
              description="Led development for a web-enabled MVP, enabling users to browse the AFFES catalog, create a cart, and place orders seamlessly. Implemented role-based access control and addressed system flaws. Collaborated with cross-functional teams, ensuring project milestones and CMMC standards."
              ghLink="https://github.com/indigo77072/AppDevSouthBalanceSite"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Personal Portfolio Websites"
              description="Designed and developed a responsive portfolio website. Key features include a toggleable navigation menu, smooth transitions, and a visually appealing portfolio grid. Achieved a modern design with a focus on responsiveness, interactivity, and visual appeal."
              ghLink="https://github.com/hector-022b/myDevPort"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
