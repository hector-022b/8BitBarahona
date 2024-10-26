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
import "./Toolstack.css";

function Toolstack() {
  const [clickedTitle, setClickedTitle] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleClickOutside = (e) => {
      if (!e.target.closest(".tech-icons")) {
        setClickedTitle(null);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = (title) => {
    setClickedTitle(clickedTitle === title ? null : title);
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
          className={`tech-icons ${isMobile ? "mobile-click" : ""}`}
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
