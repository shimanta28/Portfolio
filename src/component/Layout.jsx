import { Box, Grid2 } from "@mui/material";
import React from "react";
import Home from "../pages/Home";
import IntroCard from "./IntroCard";
import Projects from "../pages/Projects";
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Navtab from "./Navtab";
import Service from "../pages/Service";
import ContactMe from "../pages/ContactMe";

const Layout = () => {
  return (
    <Box height="100vh">
      <Grid2 container>
        {/* Left component */}
        <Grid2
          size={{ xs: 12, lg: 4 }} // Takes 4 out of 12 columns on large screens
          sx={{
            height: { xs: "auto", lg: "100vh" }, // Full height on large screens
            bgcolor: "#141414",
            display: { xs: "none", lg: "flex" },
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            position: { xs: "relative", lg: "sticky" }, // Sticky only on large screens
            top: { lg: 0 },
          }}
        >
          <IntroCard />
        </Grid2>

        {/* Right component */}
        <Grid2
          size={{ xs: 12, lg: 8 }} // Takes 8 out of 12 columns on large screens
          sx={{
            bgcolor: "#141414",

            overflowY: "auto", // Enable vertical scrolling
            height: "100vh", // Full height
          }}
        >
          <Navtab></Navtab>
          <Home></Home>
          <Projects />
          <Education />
          <Skills />
          <Service></Service>
          <ContactMe />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Layout;
