import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "../component/ServiceCard";
import camera from "../assets/camera.jpg";
import webDev from "../assets/webDev.jpg";
import AnimatedScaleComponent from "../component/AnimatedScaleComponent";
import AnimatedComponent from "../component/AnimatedComponent";
import Form from "../component/Form";
import BlinkingCat from "../component/BlinkingCat";
const ContactMe = () => {
  return (
    <Box id="contact" height={"100vh"} marginTop={5}>
      <AnimatedComponent>
        <Typography
          sx={{
            fontFamily: "Montserrat, serif",
            fontSize: { xs: 40, lg: 60 },
            fontWeight: "500",
            lineHeight: 1.2,
            paddingTop: 8,
            background:
              " linear-gradient(to right top, #a16ea6, #8b8bcf, #61a8ea, #21c4f3, #12dceb)", // Apply gradient
            WebkitBackgroundClip: "text", // Clip background to text
            color: "transparent",
          }}
        >
          Contact Me
        </Typography>
      </AnimatedComponent>

      <Form />
    </Box>
  );
};

export default ContactMe;
