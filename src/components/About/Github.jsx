import React from "react";
import GitHubCalendar from "react-github-calendar";

import { FaGithub } from "react-icons/fa";

import { useTheme } from "../../context/ThemeContext";

function Github() {
  const { theme, mode } = useTheme();

  const calendarColors = {
    "8bit-purple": {
      dark: "#c770f0",
      light: "#8f3fc1",
    },
    "crimson-static": {
      dark: "#d11f32",
      light: "#9e1725",
    },
    "cyber-sunset": {
      dark: "#ff7849",
      light: "#e85f32",
    },
  };

  const calendarColor =
    calendarColors[theme]?.[mode] || calendarColors["8bit-purple"].dark;

  return (
    <div className="github-section">
      <div className="section-heading">
        <p className="section-eyebrow">Open source & activity</p>

        <h2>
          GitHub <span>Contributions</span>
        </h2>

        <p>
          A look at my recent development activity, practice, and project work
          on GitHub.
        </p>
      </div>

      <div className="github-card">
        <div className="github-card-header">
          <div>
            <p className="github-username">
              <FaGithub />
              @hector-022b
            </p>
          </div>

          <a
            href="https://github.com/hector-022b"
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-link"
          >
            View GitHub
          </a>
        </div>

        <div className="github-calendar-wrapper">
          <GitHubCalendar
            username="hector-022b"
            blockSize={15}
            blockMargin={5}
            color={calendarColor}
            fontSize={14}
          />
        </div>
      </div>
    </div>
  );
}

export default Github;