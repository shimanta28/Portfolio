import React, { useState } from "react";
import { Box, Grid, TextField, Typography, Button, Grid2 } from "@mui/material";
import AnimatedComponent from "./AnimatedComponent";

const Form = () => {
  let [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phnNo: "",
    details: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch(
        "https://portfolio-backend-my98.onrender.com/api/responses",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          companyName: "",
          email: "",
          phnNo: "",
          details: "",
        });
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <AnimatedComponent>
      <Box
        marginTop={2}
        sx={{
          padding: "20px",

          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid2 container spacing={2} width={"90%"}>
          {/* First Row: Name and Company */}
          <Grid2 size={{ lg: 6, md: 6, xs: 12 }}>
            <TextField
              fullWidth
              label="Name"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "violet",
                  },
                },
              }}
            />
          </Grid2>
          <Grid2 size={{ lg: 6, md: 6, xs: 12 }}>
            <TextField
              fullWidth
              label="Company"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "violet",
                  },
                },
              }}
            />
          </Grid2>

          {/* Second Row: Email and Phone Number */}
          <Grid2 size={{ lg: 6, md: 6, xs: 12 }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "violet",
                  },
                },
              }}
            />
          </Grid2>
          <Grid2 size={{ lg: 6, md: 6, xs: 12 }}>
            <TextField
              fullWidth
              label="Phone Number"
              type="tel"
              required
              name="phnNo"
              value={formData.phnNo}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "violet",
                  },
                },
              }}
            />
          </Grid2>

          {/* Third Row: Text Input */}
          <Grid2 size={{ lg: 12 }}>
            <TextField
              fullWidth
              label="Additional Information"
              multiline
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows={4}
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "violet",
                  },
                },
              }}
            />
          </Grid2>

          {/* Submit Button */}
          <Grid2>
            <Button
              onClick={handleSubmit}
              sx={{
                color: "whitesmoke",
                border: "1px solid white ", // Transparent border
                borderRadius: "20px", // Rounded corners

                padding: "10px 20px", // Inner spacing
                marginTop: 2,
                backgroundClip: "padding-box", // Ensures gradient stays outside content area
              }}
            >
              Submit
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </AnimatedComponent>
  );
};

export default Form;
