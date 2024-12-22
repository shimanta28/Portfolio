import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ServiceCard = ({ heading, subheading, image }) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "400px" },
        height: "max-content",
        bgcolor: "black",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <Stack>
        <Box padding={5}>
          <Typography
            sx={{
              fontFamily: "Montserrat, serif",
              fontSize: { xs: 30, lg: 30 },
              fontWeight: "700",
              lineHeight: 1.2,

              color: "white",
            }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat, serif",
              fontSize: { xs: 30, lg: 14 },
              fontWeight: "600",
              lineHeight: 1.2,
              marginY: 2,
              color: "whitesmoke",
            }}
          >
            {subheading}
          </Typography>
        </Box>
        <Box component="img" src={image} sx={{ objectFit: "cover" }}></Box>
      </Stack>
    </Box>
  );
};

export default ServiceCard;
