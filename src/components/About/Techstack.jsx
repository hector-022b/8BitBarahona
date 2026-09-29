import React from "react";

import { CgCPlusPlus } from "react-icons/cg";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
  DiHtml5,
  DiPhp,
  DiCss3,
} from "react-icons/di";

import "./StackStyles.css";

function Techstack() {
  const technologies = [
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiHtml5 />, name: "HTML5" },
    { icon: <DiCss3 />, name: "CSS3" },
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiPhp />, name: "PHP" },
    { icon: <DiJava />, name: "Java" },
  ];

  return (
    <div className="stack-grid">
      {technologies.map((technology) => (
        <div className="stack-item" key={technology.name}>
          <div className="stack-icon" aria-hidden="true">
            {technology.icon}
          </div>

          <span className="stack-label">{technology.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Techstack;