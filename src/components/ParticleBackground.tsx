import React from 'react';
import { useCallback, useEffect, useState } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

interface ParticleBackgroundProps {
  enhanced?: boolean;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ enhanced = false }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Reduce particle count and effects on mobile
  const particleCount = isMobile ? (enhanced ? 40 : 30) : (enhanced ? 100 : 80);
  const particleSpeed = isMobile ? 0.3 : (enhanced ? 0.8 : 0.6);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60, // Reduced for better performance
        interactivity: {
          events: {
            onHover: {
              enable: !isMobile,
              mode: "grab"
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: enhanced ? 250 : 200,
              links: {
                opacity: 0.8,
                color: "#a78bfa"
              }
            }
          }
        },
        particles: {
          color: {
            value: "#a78bfa",
          },
          links: {
            color: "#8b5cf6",
            distance: enhanced ? 150 : 130,
            enable: true,
            opacity: enhanced ? 0.15 : 0.12,
            width: enhanced ? 1 : 0.8,
            triangles: {
              enable: false
            }
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: particleSpeed,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: enhanced ? 800 : 1000,
            },
            value: particleCount,
          },
          opacity: {
            value: enhanced ? 0.3 : 0.25,
            animation: {
              enable: false
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: enhanced ? 1 : 0.8, max: enhanced ? 1.5 : 1.2 },
            animation: {
              enable: false
            }
          }
        },
        detectRetina: true,
        background: {
          color: "#000000",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        }
      }}
      className="absolute inset-0"
    />
  );
};

export default ParticleBackground;