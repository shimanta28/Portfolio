import React from "react";
import { Button } from "@mui/material";
import myCV from "../assets/my_cv.pdf"; // Adjust the path as necessary

const DownloadCVButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = myCV; // Use the imported file path
    link.download = "My_CV.pdf"; // Desired file name
    link.click();
  };

  return (
    <Button
      onClick={handleDownload}
      sx={{
        color: "whitesmoke",
        border: "1px solid white ", // Transparent border
        borderRadius: "20px", // Rounded corners

        padding: "10px 20px", // Inner spacing
        marginTop: 2,
        backgroundClip: "padding-box", // Ensures gradient stays outside content area
      }}
    >
      Download CV
    </Button>
  );
};

export default DownloadCVButton;
