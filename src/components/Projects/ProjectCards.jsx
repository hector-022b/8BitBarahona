import React from "react";

import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsCodeSlash } from "react-icons/bs";

function ProjectCard({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  technologies = [],
  projectType = "Code Project",
}) {
  return (
    <article className="project-card-view">
      {imgPath ? (
        <div className="project-image-wrapper">
          <img
            src={imgPath}
            alt={`${title} project preview`}
            className="project-image"
          />
        </div>
      ) : (
        <div className="project-code-preview">
          <BsCodeSlash className="project-code-icon" />

          <span className="project-code-type">
            {projectType}
          </span>

          <h3>{title}</h3>

          {technologies.length > 0 && (
            <p>{technologies.join(" • ")}</p>
          )}
        </div>
      )}

      <div className="project-card-content">
        <h2 className="project-card-title">
          {title}
        </h2>

        <p className="project-card-description">
          {description}
        </p>

        {technologies.length > 0 && (
          <div className="project-tech-list">
            {technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>
        )}

        <div className="project-card-actions">
          {ghLink && (
            <a
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <BsGithub />
              View Code
            </a>
          )}

          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link-primary"
            >
              <CgWebsite />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;