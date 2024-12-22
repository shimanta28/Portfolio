import { Box, Typography } from "@mui/material";
import React from "react";
import DownloadCVButton from "../component/DownloadCVButton.jsx";

const Home = () => {
  return (
    <Box height={"100%"} id="home">
      <Typography
        sx={{
          fontFamily: "Montserrat, serif",
          fontSize: { xs: 40, lg: 85 },
          fontWeight: "700",
          lineHeight: 1.2,
          paddingTop: 30,
          background:
            " linear-gradient(to right top, #a16ea6, #8b8bcf, #61a8ea, #21c4f3, #12dceb)", // Apply gradient
          WebkitBackgroundClip: "text", // Clip background to text
          color: "transparent",
        }}
      >
        Im Shimanta Dey <br /> Web developer and
        <br />
        Photographer
      </Typography>
      <DownloadCVButton />
    </Box>
  );
};

export default Home;
