import React from "react";
import Particles from "react-tsparticles";

import { useTheme } from "../context/ThemeContext";

function Particle() {
  const { theme, mode } = useTheme();

  if (theme !== "8bit-purple") {
    return null;
  }

  const particleColor = mode === "dark" ? "#c770f0" : "#8f3fc1";

  return (
    <Particles
      id="tsparticles"
      className="theme-particles"
      params={{
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              value_area: 1200,
            },
          },

          color: {
            value: particleColor,
          },

          links: {
            enable: false,
          },

          move: {
            enable: true,
            direction: "none",
            speed: 0.25,
            random: true,
          },

          size: {
            value: 1.5,
            random: true,
          },

          opacity: {
            value: mode === "dark" ? 0.45 : 0.2,
            random: true,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: false,
            },

            onClick: {
              enable: false,
            },
          },
        },

        retina_detect: true,
      }}
    />
  );
}

export default Particle;