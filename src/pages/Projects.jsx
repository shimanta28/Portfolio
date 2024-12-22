import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ImgCard from "../component/ImgCard";
import profileImage from "../assets/right.jpeg";
import projectdemoimg from "../assets/Split.jpeg";
import PhotographsShow from "../component/PhotographsShow";
import AnimatedComponent from "../component/AnimatedComponent";
import AnimatedScaleComponent from "../component/AnimatedScaleComponent";
import eduWallet from "../assets/eduWallet.jpg";
import splity from "../assets/splity.jpg";
import taskManagement from "../assets/taskManagement.jpg";

const Projects = () => {
  const projectArray = [
    { topic: "fullstack", coverImg: eduWallet, link: "" },
    {
      topic: "fullstack",
      coverImg: splity,
      link: "https://expense-tracker-for-friends.vercel.app/",
    },
    {
      topic: "frontend",
      coverImg: taskManagement,
      link: "https://shimanta-task-management-app.vercel.app/",
    },
  ];
  let [tempArray, setTempArray] = useState(projectArray);

  const handleFilter = (v) => {
    if (v === "all") {
      tempArray = projectArray;
      setTempArray(tempArray);
    } else if (v === "fs") {
      tempArray = projectArray.filter(
        (project) => project.topic == "fullstack"
      );
      setTempArray(tempArray);
    } else {
      tempArray = projectArray.filter((project) => project.topic == "frontend");
      setTempArray(tempArray);
    }
    console.log(tempArray);
  };
  return (
    <Box id="projects">
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
        Checkout my <br /> projects
      </Typography>

      <Stack direction={"row"} spacing={4} marginTop={2} color={"white"}>
        <Button fontSize={20} color="white" onClick={() => handleFilter("all")}>
          All
        </Button>
        <Button fontSize={20} color="white" onClick={() => handleFilter("fs")}>
          Full Stack
        </Button>
        <Button fontSize={20} color="white" onClick={() => handleFilter("fe")}>
          Frontend
        </Button>
      </Stack>

      <Grid2 container spacing={3} marginTop={3}>
        {tempArray.map((project) => (
          <AnimatedScaleComponent>
            <Grid2 size={{ sx: 12, lg: "auto" }}>
              <ImgCard
                image={project.coverImg}
                title={""}
                link={project.link}
              ></ImgCard>
            </Grid2>
          </AnimatedScaleComponent>
        ))}
      </Grid2>
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
          marginTop: 20,
        }}
      >
        Checkout my <br /> photography
      </Typography>

      <PhotographsShow />
    </Box>
  );
};

export default Projects;
