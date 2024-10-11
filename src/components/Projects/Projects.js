import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import classPort from "../../Assets/Projects/classPort.svg";
import personalPort from "../../Assets/Projects/personalPort.svg";
import AlienMan from "../../Assets/Projects/AlienMan.svg";
import Dodger from "../../Assets/Projects/dodger.svg";
import capstoneLogin from "../../Assets/Projects/capstoneLogin.svg";
import bombMaze from "../../Assets/Projects/bombMaze.svg";

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
              imgPath={Dodger}
              isBlog={false}
              title="Dodger"
              description="Created my version of Dodger, a game where the player has to avoid falling objects. The player can move using the arrow keys or mouse. A score and top score are kept."
              ghLink="" // No GitHub link provided, button will not show
              demoLink="https://replit.com/@hbarahona022/dodger?v=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bombMaze}
              isBlog={false}
              title="Bomb Maze"
              description="In this project I reskinned someone else's code to create my own game.  This game has a start phase, a play phase, and a game over phase. The player must navigate through the maze while dodging the bombs (the bombs are endless). There will be three rooms the player can play in. There is no time limit for the player to clear the room and the rooms loop."
              ghLink="" // No GitHub link provided, button will not show
              demoLink="https://replit.com/@hbarahona022/BombMaze?v=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AlienMan}
              isBlog={false}
              title="AlienMan"
              description="Created my version of hangman. Learned to include a dictionary so there could be multiple word categories."
              ghLink="" // No GitHub link provided, button will not show
              demoLink="https://replit.com/@hbarahona022/alienMan?v=1"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={classPort}
              isBlog={false}
              title="Assignment Portfolio Website"
              description="Created a class projects website using HTML and CSS for a clean and straightforward showcase of academic work. The website features organized sections for different projects, maintaining a responsive design for various screen sizes."
              ghLink="" // No GitHub link provided, button will not show
              demoLink="https://cpst.tulane.edu/~hbarahona/CPST2400StudentWebsiteStarterFiles/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={capstoneLogin}
              isBlog={false}
              title="Capstone"
              description="Led development for a web-enabled MVP, enabling users to browse the AFFES catalog, create a cart, and place orders seamlessly. Implemented role-based access control and addressed system flaws. Collaborated with cross-functional teams, ensuring project milestones and CMMC standards."
              ghLink="https://github.com/indigo77072/AppDevSouthBalanceSite"
              demoLink="https://docs.google.com/presentation/d/1zBgq7s8z6hZ77siOWrSBIKmFFpqu6Caqzt06lbwZlCw/edit?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personalPort}
              isBlog={false}
              title="Personal Portfolio Websites"
              description="Designed and developed a responsive portfolio website. Key features include a toggleable navigation menu, smooth transitions, and a visually appealing portfolio grid. Achieved a modern design with a focus on responsiveness, interactivity, and visual appeal."
              ghLink="https://github.com/hector-022b/myDevPort"
              demoLink="" // No Demo link provided, button will not show
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
