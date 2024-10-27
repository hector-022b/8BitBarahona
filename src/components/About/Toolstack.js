import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiGithub, SiSlack, SiVercel, SiWindows, SiGit, SiMicrosoftazure, SiMysql, SiFigma, SiMicrosoftoffice } from "react-icons/si";
import "./StackStyles.css";

function Toolstack() {
  const [clickedTitle, setClickedTitle] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();

    const handleClickOutside = (e) => {
      if (!e.target.closest(".tech-icons")) setClickedTitle(null);
    };

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

  const icons = [
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
    <Row className="stack-container">
      {icons.map((icon, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          onClick={() => handleClick(icon.title)}
        >
          <div className="icon-card">
            {icon.component}
            <div
              className={`tech-title-overlay ${
                clickedTitle === icon.title ? "visible" : ""
              }`}
            >
              {icon.title}
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
