import React from "react";
import { Container } from "react-bootstrap";

import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

import classPort from "../../Assets/Projects/classPort.svg";
import capstoneLogin from "../../Assets/Projects/capstoneLogin.svg";
import todoPreview from "../../Assets/Projects/todo-preview.png";
// import worldCupPreview from "../../Assets/Projects/world-cup-preview.png";
// import ufoPreview from "../../Assets/Projects/ufo-preview.png";

function Projects() {
  const projects = [
    {
      title: "React Todo List",
      description:
        "A responsive React application with authentication, protected routes, todo creation and editing, completion tracking, search, filtering, sorting, profile statistics, validation, and user-friendly loading and error states.",
      technologies: [
        "React",
        "React Router",
        "JavaScript",
        "Vite",
        "REST API",
        "CSS Modules",
      ],
      projectType: "React Application",
      ghLink: "https://github.com/hector-022b/todo-list",
      demoLink: "https://hector-ctd-todo.vercel.app",

      imgPath: todoPreview,
    },

    {
      title: "React Curriculum v4 Exercises",
      description:
        "A collection of hands-on React exercises completed through Code the Dream's React curriculum, covering component design, state management, reusable components, hooks, routing, optimization, testing, and modern React development practices.",
      technologies: [
        "React",
        "React Router",
        "Vite",
        "Vitest",
        "Testing Library",
        "ESLint",
      ],
      projectType: "React Learning Project",
      ghLink:
        "https://github.com/hector-022b/react-curriculum-v4-exercises",
    },

    {
      title: "World Cup 2026 Tracker",
      description:
        "A responsive web project built for Code the Dream featuring a live countdown to the 2026 FIFA World Cup, player profile cards, career information, trophy data, API integration, and error handling.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Fetch API",
        "API-Football",
      ],
      projectType: "API Web Application",
      ghLink:
        "https://github.com/hector-022b/Hector-Barahona-Intro-26.2",

      // imgPath: worldCupPreview,
    },

    {
      title: "UFO Orb Hunt",
      description:
        "An arcade-style browser game built with JavaScript and p5.js. Players control a UFO, collect energy orbs, and avoid falling asteroids while the project demonstrates prototypes, inheritance, object types, arrays, and animation logic.",
      technologies: ["JavaScript", "p5.js", "OOP"],
      projectType: "Browser Game",
      ghLink:
        "https://github.com/hector-022b/ufo-orb-hunt",

      // imgPath: ufoPreview,
    },

    {
      title: "Scientific Computing with Python",
      description:
        "A growing collection of Python projects focused on programming fundamentals, data manipulation, debugging, and algorithmic problem solving, including a cipher, Luhn algorithm, expense tracker, password generator, shortest-path algorithm, and more.",
      technologies: [
        "Python",
        "Algorithms",
        "Data Structures",
        "Problem Solving",
      ],
      projectType: "Python Project Collection",
      ghLink:
        "https://github.com/hector-022b/Scientific-Computing-with-Python",
    },

    {
      title: "South Balance Capstone",
      description:
        "A web-enabled MVP developed as part of my university capstone. The application included product browsing, shopping-cart functionality, role-based access, database integration, testing, and collaborative development toward CMMC-related requirements.",
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      projectType: "Full-Stack Capstone",
      ghLink:
        "https://github.com/indigo77072/AppDevSouthBalanceSite",
      demoLink:
        "https://docs.google.com/presentation/d/1zBgq7s8z6hZ77siOWrSBIKmFFpqu6Caqzt06lbwZlCw/edit?usp=sharing",
      imgPath: capstoneLogin,
    },

    {
      title: "Assignment Portfolio Website",
      description:
        "An academic portfolio website created during my coursework at Tulane University to organize and present class assignments while practicing responsive page structure and foundational web development.",
      technologies: ["HTML", "CSS"],
      projectType: "Course Project",
      ghLink: "",
      demoLink:
        "https://cpst.tulane.edu/~hbarahona/CPST2400StudentWebsiteStarterFiles/",
      imgPath: classPort,
    },
  ];

  return (
    <main className="project-section">
      <Particle />

      <Container className="project-content">
        <header className="projects-header">
          <p className="section-eyebrow">
            Selected work
          </p>

          <h1 className="projects-title">
            Projects I&apos;ve{" "}
            <span>built and learned from.</span>
          </h1>

          <p className="projects-intro">
            A selection of software, web, and development projects that reflect
            my experience, interests, and continued growth as a developer.
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}

export default Projects;