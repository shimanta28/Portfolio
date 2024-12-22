import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardActions,
  Typography,
} from "@mui/material";

const ImgCard = ({ image, title, link }) => {
  return (
    <Card
      sx={{
        position: "relative",
        overflow: "hidden",
        width: { xs: 350, lg: 400 },
        height: { xs: 350, lg: 400 },
        borderRadius: 2,
        boxShadow: 3,
        "&:hover .card-media": {
          transform: "scale(1.1)", // Smooth zoom effect on hover
        },
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        className="card-media"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.5s ease", // Smooth transition
        }}
      />

      {/* Title overlay */}

      {/* Action button */}
      <CardActions
        sx={{
          position: "absolute",
          bottom: 5,
        }}
      >
        <Button
          variant="contained"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            bgcolor: "black",
            fontSize: 10,
            borderRadius: 5,
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ImgCard;
