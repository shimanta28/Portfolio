import { Box, Typography, Grid2, Stack } from "@mui/material";
import React from "react";
import AnimatedComponent from "../component/AnimatedComponent";

const Education = () => {
  const educationArray = [
    {
      year: "2021-2025",
      degree: "Bachelor of technology",
      stream: "CSE",
      instituiton: "Techno India University",
      details:
        "In-depth knowledge of programming, algorithms, and softwaredevelopment",
    },
    {
      year: "2019-2021",
      degree: "Higher Secondary",
      stream: "Science",
      instituiton: "Holycross School, Baruipur",
      details:
        "Focused on physics, chemistry, computer and mathematics for engineering foundations.",
    },
    {
      year: "2019",
      degree: "Secondary",
      stream: "Science",
      instituiton: "The St Xaviers School, Malda",
      details:
        "Built a strong base in general education and explored an interest in technology",
    },
  ];
  return (
    <Box height={"100vh"} width={{ lg: "90%" }} id={"edu"}>
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
          Education and
          <br /> Experience{" "}
        </Typography>
      </AnimatedComponent>

      <Stack width={"70%"}>
        <AnimatedComponent>
          <Typography
            sx={{
              fontFamily: "Montserrat, serif",
              fontSize: { xs: 15, lg: 20 },
              fontWeight: "500",
              lineHeight: 1.2,
              color: "grey",
              marginTop: 8,
              marginLeft: 8,
            }}
          >
            "Education is not the learning of facts, but the training of the
            mind to think."
          </Typography>
        </AnimatedComponent>
      </Stack>
      <AnimatedComponent>
        <Typography
          paddingBottom={2}
          sx={{
            fontFamily: "Montserrat, serif",
            fontSize: { xs: 30, lg: 30 },
            fontWeight: "500",
            lineHeight: 1.2,
            marginTop: 8,
            color: "white",
          }}
        >
          My education
        </Typography>
      </AnimatedComponent>

      {educationArray.map((education) => (
        <AnimatedComponent>
          <Grid2
            container
            borderTop={1}
            borderBottom={1}
            borderColor={"white"}
            padding={2}
            display={"flex"}
            alignItems={"center"}
            height={"auto"}
            spacing={2}
          >
            <Grid2 size={{ lg: 2, xs: 12 }}>
              <Typography
                sx={{
                  fontFamily: "Montserrat, serif",
                  fontSize: { xs: 10, lg: 10 },
                  fontWeight: "200",
                  lineHeight: 1.2,
                  color: "white",
                }}
              >
                {education.year}
              </Typography>
            </Grid2>
            <Grid2 size={{ lg: 4, xs: 12 }}>
              <Typography
                sx={{
                  fontFamily: "Montserrat, serif",
                  fontSize: { xs: 20, lg: 20 },
                  fontWeight: "500",
                  lineHeight: 1.2,
                  color: "white",
                }}
              >
                {education.degree}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat, serif",
                  fontSize: { xs: 11, lg: 11 },
                  fontWeight: "250",
                  lineHeight: 1.2,
                  color: "white",
                }}
              >
                {education.stream}
                <br />
                {education.instituiton}
              </Typography>
            </Grid2>
            <Grid2 size={{ lg: 6, xs: 12 }}>
              <Typography
                sx={{
                  fontFamily: "Montserrat, serif",
                  fontSize: { xs: 15, lg: 15 },
                  fontWeight: "200",
                  lineHeight: 1.2,
                  color: "white",
                }}
              >
                {education.details}
              </Typography>
            </Grid2>
          </Grid2>
        </AnimatedComponent>
      ))}
    </Box>
  );
};

export default Education;
