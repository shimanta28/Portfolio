import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, keyframes } from "@mui/material";

const ImageWithCaption = ({ imageUrl, caption, duration = 0.6 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Spring animation keyframes
  const springPop = keyframes`
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  `;

  // Intersection Observer to detect visibility and reset animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100px",
        height: "auto",
        borderRadius: "8px",
        overflow: "hidden",
        transform: isVisible ? "scale(1)" : "scale(0.5)",
        opacity: isVisible ? 1 : 0,
        animation: isVisible ? `${springPop} ${duration}s ease-in-out` : "none",
        transition: isVisible
          ? "none"
          : `transform ${duration}s ease, opacity ${duration}s ease`, // Smooth reset
      }}
    >
      {/* Image */}
      <Box
        sx={{
          width: "100%",
          height: "100px",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Caption */}
      <Box
        sx={{
          color: "white",
          padding: "0.5rem",
          textAlign: "center",
        }}
      >
        <Typography variant="body2">{caption}</Typography>
      </Box>
    </Box>
  );
};

export default ImageWithCaption;
