import React from "react";
import { Box } from "@mui/material";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import AnimatedScaleComponent from "./AnimatedScaleComponent";

const PhotographsShow = () => {
  // Array of image URLs for the gallery
  const images = [p1, p2, p3, p4, p5, p6];

  return (
    <Box
      marginTop={2}
      sx={{
        width: { xs: "90%", lg: "73%" },
        overflowX: "auto", // Enable horizontal scrolling
        whiteSpace: "nowrap", // Prevent wrapping of images
        padding: "20px 0px", // Add some space around the images
        scrollbarWidth: "none", // Firefox: Hide scrollbar
        msOverflowStyle: "none", // Internet Explorer: Hide scrollbar
        "&::-webkit-scrollbar": {
          display: "none", // Hide scrollbar for Webkit-based browsers (Chrome, Safari)
        },
      }}
    >
      <Box
        sx={{
          display: "inline-flex", // Display images in a row
          gap: "20px", // Space between images
        }}
      >
        {images.map((image, index) => (
          <AnimatedScaleComponent>
            <Box
              key={index}
              sx={{
                width: "350px",
                height: "350px",
                overflow: "hidden",
                borderRadius: "10px", // Optional: for rounded corners
              }}
            >
              <img
                src={image}
                alt={`carousel-image-${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </AnimatedScaleComponent>
        ))}
      </Box>
    </Box>
  );
};

export default PhotographsShow;
