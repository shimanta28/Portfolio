import React from "react";
import { Stack, Button } from "@mui/material";
import { Link } from "react-scroll";

const Navtab = () => {
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        position: "fixed",
        top: 0,

        paddingTop: 4,
        zIndex: 1000,
      }}
    >
      <Button
        onClick={() => smoothScroll("home")}
        smooth={true}
        duration={500}
        sx={{ color: "whitesmoke" }}
      >
        Home
      </Button>
      <Button
        onClick={() => smoothScroll("projects")}
        smooth={true}
        duration={500}
        sx={{ color: "whitesmoke" }}
      >
        Projects
      </Button>
      <Button
        onClick={() => smoothScroll("edu")}
        smooth={true}
        duration={500}
        sx={{ color: "whitesmoke" }}
      >
        Education
      </Button>
      <Button
        onClick={() => smoothScroll("skill")}
        smooth={true}
        duration={500}
        sx={{ color: "whitesmoke" }}
      >
        Skills
      </Button>
      <Button
        onClick={() => smoothScroll("service")}
        smooth={true}
        duration={500}
        sx={{ color: "whitesmoke" }}
      >
        Services
      </Button>
      <Button
        onClick={() => smoothScroll("contact")}
        smooth={true}
        duration={500}
        sx={{ color: "whitesmoke" }}
      >
        Contact Me
      </Button>
    </Stack>
  );
};

export default Navtab;
