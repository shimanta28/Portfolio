import React from "react";
import { Box } from "@mui/material";

const BlinkingCat = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "170px",
        width: "192px", // 170 * 1.13
      }}
    >
      {/* Ears */}
      <Box
        sx={{
          position: "absolute",
          top: "-30%",
          left: "-7%",
          width: "25%",
          height: "60%",
          backgroundColor: "#fff",
          borderRadius: "70% 30% 0 0 / 100% 100% 0 0",
          transform: "rotate(-15deg)",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            bottom: "24%",
            height: "10%",
            width: "5%",
            backgroundColor: "#161616",
            borderRadius: "50%",
          },
          "&::before": { right: "10%" },
          "&::after": { right: "10%", transform: "rotate(-45deg)" },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "-30%",
          right: "-7%",
          width: "25%",
          height: "60%",
          backgroundColor: "#fff",
          borderRadius: "30% 70% 0 0 / 100% 100% 0 0",
          transform: "rotate(15deg)",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            bottom: "24%",
            height: "10%",
            width: "5%",
            backgroundColor: "#161616",
            borderRadius: "50%",
          },
          "&::before": { left: "10%" },
          "&::after": { left: "10%", transform: "rotate(45deg)" },
        }}
      />

      {/* Face */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#161616",
          borderRadius: "50%",
        }}
      >
        {/* Eyes */}
        <Box
          sx={{
            position: "absolute",
            top: "35%",
            left: "15%",
            width: "31%",
            height: "30%",
            backgroundColor: "#fff",
            borderRadius: "50%",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "0%",
              backgroundColor: "#161616",
              borderRadius: "0 0 50% 50% / 0 0 40% 40%",
              animation: "blink 4s infinite ease-in",
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: "60%",
              right: "-5%",
              width: "15%",
              height: "10%",
              backgroundColor: "#fff",
              borderRadius: "50%",
            },
            "@keyframes blink": {
              "0%, 90%, 100%": { height: "0%" },
              "92.5%, 97.5%": { height: "100%" },
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "25%",
              right: "30%",
              width: "20%",
              height: "50%",
              backgroundColor: "#161616",
              borderRadius: "50%",
              animation: "look-around 4s infinite",
              "&::after": {
                content: '""',
                position: "absolute",
                top: "30%",
                right: "-5%",
                width: "35%",
                height: "20%",
                backgroundColor: "#fff",
                borderRadius: "50%",
              },
              "@keyframes look-around": {
                "0%, 25%, 100%": { transform: "translate(0, 0)" },
                "5%, 10%": { transform: "translate(50%, -25%)" },
                "15%, 20%": { transform: "translate(-100%, -25%)" },
              },
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "35%",
            right: "15%",
            width: "31%",
            height: "30%",
            backgroundColor: "#fff",
            borderRadius: "50%",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "0%",
              backgroundColor: "#161616",
              borderRadius: "0 0 50% 50% / 0 0 40% 40%",
              animation: "blink 4s infinite ease-in",
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: "60%",
              left: "-5%",
              width: "15%",
              height: "10%",
              backgroundColor: "#fff",
              borderRadius: "50%",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "25%",
              left: "30%",
              width: "20%",
              height: "50%",
              backgroundColor: "#161616",
              borderRadius: "50%",
              animation: "look-around 4s infinite",
              "&::after": {
                content: '""',
                position: "absolute",
                top: "30%",
                right: "-5%",
                width: "35%",
                height: "20%",
                backgroundColor: "#fff",
                borderRadius: "50%",
              },
            }}
          />
        </Box>
      </Box>

      {/* Muzzle */}
      <Box
        sx={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          width: "20px",
          height: "10px",
          backgroundColor: "#fff",
          borderRadius: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </Box>
  );
};

export default BlinkingCat;
