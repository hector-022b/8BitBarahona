import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
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
import "./Techstack.css";

function Techstack() {
  const [clickedTitle, setClickedTitle] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Close overlay when clicking outside
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

  const icons = [
    { component: <DiPython />, title: "Python" },
    { component: <DiJavascript1 />, title: "JavaScript" },
    { component: <DiReact />, title: "React" },
    { component: <DiHtml5 />, title: "HTML5" },
    { component: <DiCss3 />, title: "CSS3" },
    { component: <CgCPlusPlus />, title: "C++" },
    { component: <DiNodejs />, title: "NodeJs" },
    { component: <DiPhp />, title: "PHP" },
    { component: <DiJava />, title: "Java" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((icon, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className={`tech-icons ${isMobile ? "mobile-click" : ""}`}
          onClick={() => handleClick(icon.title)}
        >
          {icon.component}
          <div
            className={`tech-title-overlay ${
              clickedTitle === icon.title ? "visible" : ""
            }`}
          >
            {icon.title}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
