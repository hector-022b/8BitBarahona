import React from "react";

import {
  SiVisualstudiocode,
  SiGithub,
  SiVercel,
  SiWindows,
  SiGit,
  SiMicrosoftazure,
  SiMysql,
  SiFigma,
  SiMicrosoftoffice,
} from "react-icons/si";

import "./StackStyles.css";

function Toolstack() {
  const tools = [
    { icon: <SiWindows />, name: "Windows" },
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiMicrosoftazure />, name: "Azure" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiMicrosoftoffice />, name: "Microsoft 365" },
  ];

  return (
    <div className="stack-grid">
      {tools.map((tool) => (
        <div className="stack-item" key={tool.name}>
          <div className="stack-icon" aria-hidden="true">
            {tool.icon}
          </div>

          <span className="stack-label">{tool.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;