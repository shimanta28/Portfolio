import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";
import React from "react";
import ImageWithCaption from "../component/ImageWithCaption";
import AnimatedScaleComponent from "../component/AnimatedScaleComponent";
import AnimatedComponent from "../component/AnimatedComponent";
import ServiceCard from "../component/ServiceCard";

const Skills = () => {
  const SkillsArray = [
    {
      imgurl:
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      caption: "React",
      duration: "0.6",
    },
    {
      imgurl:
        "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png",
      caption: "JavaScript",
      duration: "1",
    },
    {
      imgurl:
        "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
      caption: "HTML",
      duration: "1.4",
    },
    {
      imgurl:
        "https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png",
      caption: "CSS",
      duration: "1.8",
    },
    {
      imgurl:
        "https://cdn1.iconfinder.com/data/icons/buno-programming-files/32/c_file_programming_format_document-512.png",
      caption: "C++",
      duration: "2.2",
    },
    {
      imgurl:
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png",
      caption: "Node js",
      duration: "2.4",
    },
  ];
  return (
    <Box height={"100vh"} marginTop={10} id={"skill"}>
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
        My Tools
      </Typography>

      <Grid2 container spacing={{ xs: 4, lg: 4 }} marginTop={2}>
        {SkillsArray.map((skill) => (
          <Grid2
            item
            size={{ lg: 4 }}
            display="flex" // Flexbox for centering
            justifyContent="space-between" // Center horizontally
            padding={2}
          >
            <AnimatedComponent>
              <ImageWithCaption
                imageUrl={skill.imgurl}
                caption={skill.caption}
                duration={skill.duration}
              ></ImageWithCaption>
            </AnimatedComponent>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
export default Skills;
