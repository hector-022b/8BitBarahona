import React, { useEffect, useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { Link, NavLink } from "react-router-dom";

import logo from "../Assets/logo.png";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

import {
  BsSun,
  BsMoon,
  BsPalette,
  BsChevronDown,
  BsCheck2,
} from "react-icons/bs";

import { useTheme } from "../context/ThemeContext";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  const themeMenuRef = useRef(null);

  const {
    theme,
    setTheme,
    mode,
    toggleMode,
  } = useTheme();

  const themes = [
    {
      value: "8bit-purple",
      label: "8Bit Purple",
    },
    {
      value: "crimson-static",
      label: "Crimson Static",
    },
    {
      value: "cyber-sunset",
      label: "Cyber Sunset",
    },
  ];

  const activeTheme =
    themes.find((item) => item.value === theme) ?? themes[0];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        themeMenuRef.current &&
        !themeMenuRef.current.contains(event.target)
      ) {
        setThemeMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setThemeMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeNavbar = () => {
    setExpanded(false);
    setThemeMenuOpen(false);
  };

  const chooseTheme = (newTheme) => {
    setTheme(newTheme);
    setThemeMenuOpen(false);
  };

  return (
    <Navbar
      expanded={expanded}
      fixed="top"
      expand="lg"
      className={`site-navbar ${scrolled ? "site-navbar-scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="navbar-brand-link"
          onClick={closeNavbar}
        >
          <img
            src={logo}
            className="navbar-logo"
            alt="Hector Barahona"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="portfolio-navbar"
          aria-label="Toggle navigation"
          onClick={() => setExpanded((current) => !current)}
        >
          <span />
          <span />
          <span />
        </Navbar.Toggle>

        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="ms-auto navbar-links">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              onClick={closeNavbar}
            >
              <AiOutlineHome />
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              onClick={closeNavbar}
            >
              <AiOutlineUser />
              About
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/project"
              onClick={closeNavbar}
            >
              <AiOutlineFundProjectionScreen />
              Projects
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/resume"
              onClick={closeNavbar}
            >
              <CgFileDocument />
              Resume
            </Nav.Link>
          </Nav>

          <div className="navbar-controls">
            <button
              type="button"
              className="mode-toggle"
              onClick={toggleMode}
              aria-label={`Switch to ${
                mode === "dark" ? "light" : "dark"
              } mode`}
              title={`Switch to ${
                mode === "dark" ? "light" : "dark"
              } mode`}
            >
              {mode === "dark" ? <BsSun /> : <BsMoon />}
            </button>

            <div
              className="theme-dropdown"
              ref={themeMenuRef}
            >
              <button
                type="button"
                className="theme-dropdown-trigger"
                onClick={() =>
                  setThemeMenuOpen((current) => !current)
                }
                aria-haspopup="menu"
                aria-expanded={themeMenuOpen}
              >
                <BsPalette
                  className="theme-icon"
                  aria-hidden="true"
                />

                <span className="theme-dropdown-label">
                  Theme
                </span>

                <span className="theme-dropdown-value">
                  {activeTheme.label}
                </span>

                <BsChevronDown
                  className={`theme-dropdown-chevron ${
                    themeMenuOpen ? "open" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {themeMenuOpen && (
                <div
                  className="theme-dropdown-menu"
                  role="menu"
                >
                  {themes.map((item) => {
                    const isActive =
                      item.value === theme;

                    return (
                      <button
                        key={item.value}
                        type="button"
                        className={`theme-dropdown-option ${
                          isActive ? "active" : ""
                        }`}
                        onClick={() =>
                          chooseTheme(item.value)
                        }
                        role="menuitem"
                      >
                        <span className="theme-option-dot" />

                        <span>
                          {item.label}
                        </span>

                        {isActive && (
                          <BsCheck2
                            className="theme-option-check"
                            aria-hidden="true"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;