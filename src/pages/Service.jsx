import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "../component/ServiceCard";
import camera from "../assets/camera.jpg";
import webDev from "../assets/webDev.jpg";
import AnimatedScaleComponent from "../component/AnimatedScaleComponent";
import AnimatedComponent from "../component/AnimatedComponent";
const Service = () => {
  return (
    <Box id="service" height={"max-content"}>
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
          My Services
        </Typography>
      </AnimatedComponent>

      <Grid2 container spacing={2} padding={4} marginTop={2}>
        <Grid2 size={{ xs: 12, lg: 6 }}>
          <AnimatedScaleComponent>
            <ServiceCard
              heading="Full Stack
            
            Development"
              subheading="I am a MERN developer"
              image={webDev}
            />
          </AnimatedScaleComponent>
        </Grid2>
        <Grid2 size={{ lg: 6 }}>
          <AnimatedScaleComponent>
            <ServiceCard
              heading="Photography and editing"
              subheading="I am a passionate photogrhaper"
              image={camera}
            />
          </AnimatedScaleComponent>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Service;
