import {
  Box,
  Grid2,
  Stack,
  Typography,
  IconButton,
  keyframes,
} from "@mui/material";
import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import profileImage from "../assets/right.jpeg";
import Home from "../pages/Home";
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
`;
const IntroCard = () => {
  return (
    <Stack
      bgcolor={"#1e1e1e"}
      color={"white"}
      sx={{
        height: "max-content", // Allow content to determine the height
        padding: 5,
        borderRadius: "1rem",
        minWidth: "max-content",
        width: { xs: "70%", lg: "auto" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          height: "auto",
        }}
      >
        <Box
          component="img"
          src="https://www.pngplay.com/wp-content/uploads/12/Cat-Clipart-PNG-Photos.png"
          width={57}
        ></Box>
        <Stack>
          <Typography
            sx={{
              fontFamily: "Montserrat, serif",
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Shimanta
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat, serif",
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Dey
          </Typography>
        </Stack>
      </Box>
      <Box
        component="img"
        src={profileImage} // Replace with your image URL
        alt="Profile"
        sx={{
          width: 200, // Set image width
          height: 200, // Set image height
          borderRadius: "10%", // Make it circular if it's a profile picture
          objectFit: "cover", // Maintain aspect ratio and cover the box
          marginTop: 2,
        }}
      />

      <Stack sx={{ marginTop: 7 }}>
        <Typography
          sx={{
            fontFamily: "Montserrat, serif",
            fontSize: 13,
            // fontWeight: "600",
          }}
        >
          Profession
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat, serif",
            fontSize: 15,
            fontWeight: "800",
          }}
        >
          Code by day
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat, serif",
            fontSize: 15,
            fontWeight: "800",
          }}
        >
          Clicks by passion
        </Typography>
      </Stack>
      <Stack sx={{ marginTop: 7 }}>
        <Typography
          sx={{
            fontFamily: "Montserrat, serif",
            fontSize: 13,
            // fontWeight: "600",
          }}
        >
          Staying in,
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat, serif",
            fontSize: 15,
            fontWeight: "800",
          }}
        >
          Kolkata, West Bengal
        </Typography>
      </Stack>
      <Stack direction="row" spacing={4} sx={{ marginTop: 7 }}>
        {/* GitHub */}
        <IconButton
          component="a"
          href="https://github.com/yourusername" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          sx={{
            "&:hover": {
              animation: `${bounce} 0.6s ease`, // Apply bounce animation on hover
            },
          }}
        >
          <GitHubIcon />
        </IconButton>

        {/* LinkedIn */}
        <IconButton
          component="a"
          href="https://linkedin.com/in/yourusername" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <LinkedInIcon />
        </IconButton>

        {/* Instagram */}
        <IconButton
          component="a"
          href="https://instagram.com/yourusername" // Replace with your Instagram URL
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <InstagramIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default IntroCard;
