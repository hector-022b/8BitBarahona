import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiSlack,
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
  const [clickedTitle, setClickedTitle] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".tech-icons")) {
        setClickedTitle(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleClick = (title) => {
    setClickedTitle((prevTitle) => (prevTitle === title ? null : title));
  };

  const tools = [
    { component: <SiWindows />, title: "Windows" },
    { component: <SiVisualstudiocode />, title: "Visual Studio Code" },
    { component: <SiGithub />, title: "Github" },
    { component: <SiGit />, title: "Git" },
    { component: <SiVercel />, title: "Vercel" },
    { component: <SiMicrosoftazure />, title: "Microsoft Azure" },
    { component: <SiMysql />, title: "MySQL" },
    { component: <SiFigma />, title: "Figma" },
    { component: <SiMicrosoftoffice />, title: "Microsoft Office" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          onClick={() => handleClick(tool.title)}
        >
          {tool.component}
          <div
            className={`tech-title-overlay ${
              clickedTitle === tool.title ? "visible" : ""
            }`}
          >
            {tool.title}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
