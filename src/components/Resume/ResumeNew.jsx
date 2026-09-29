import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import preloader from "../../Assets/pre.svg";

import Particle from "../Particle";
import pdf from "../../Assets/Hector_Barahona_Resume.pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const resumeWidth = Math.min(
    windowWidth - 40,
    850
  );

  return (
    <main className="resume-section">
      <Particle />

      <Container className="resume-content">
        <header className="resume-header">
          <p className="section-eyebrow">Experience & education</p>

          <h1 className="resume-page-title">
            My <span>Resume</span>
          </h1>

          <p className="resume-intro">
            A snapshot of my technical background, professional experience,
            education, and the skills I&apos;m continuing to build.
          </p>

          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-download"
          >
            <AiOutlineDownload />
            Download Resume
          </a>
        </header>

        <div className="resume-preview">
          <Document
            file={pdf}
            className="resume-document"
            loading={
              <div className="resume-loading">
                <img
                  src={preloader}
                  alt=""
                  className="resume-loading-icon"
                />

                <p>Loading resume...</p>
              </div>
            }
          >
            <Page
              pageNumber={1}
              width={resumeWidth}
              renderTextLayer={false}
            />
          </Document>
        </div>
      </Container>
    </main>
  );
}

export default ResumeNew;