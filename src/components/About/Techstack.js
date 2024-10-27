import React, { useState } from "react";
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
import "./StackStyles.css";

function Techstack() {
  const [clickedTitle, setClickedTitle] = useState(null);

  const handleClick = (title) => {
    setClickedTitle((prevTitle) => (prevTitle === title ? null : title)); // Toggle title on tap
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
          className="tech-icons"
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
