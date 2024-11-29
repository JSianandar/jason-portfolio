import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start", // Align items to the left
        textAlign: "left", // Align text to the left
        backgroundImage: `
          linear-gradient(120deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)),
          url('https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        padding: "0 16px",
        paddingLeft: "10%", // Add left padding for spacing
        opacity: 0.9,
      }}>
      {/* Main Heading */}
      <Typography variant="h2" fontWeight="bold" sx={{ marginBottom: 2 }}>
        Hi, I'm Jason Sianadar
      </Typography>

      {/* Subheading */}
      <Typography variant="h4" fontWeight="bold" sx={{ marginBottom: 3 }}>
        Frontend Developer & Full-Stack Developer
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{ fontSize: "1.2rem", marginBottom: 4, maxWidth: "600px" }}>
        Welcome to my portfolio! I create modern, responsive, and interactive
        web applications with interactive design. Feel free to check out my
        portfolio!
        <br />
        <br />
        Photo by{" "}
        <a
          href="https://unsplash.com/@afgprogrammer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          style={{ color: "lightblue" }}>
          Mohammad Rahmani
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com/photos/black-flat-screen-computer-monitor-oXlXu2qukGE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          style={{ color: "lightblue" }}>
          Unsplash
        </a>
      </Typography>

      {/* Call to Action Button */}
      <Button
        variant="contained"
        color="secondary"
        sx={{
          backgroundColor: "#1F51FF",
          color: "white",
          fontSize: "1.1rem",
          padding: "10px 24px",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
        startIcon={<EmailIcon />}>
        Hire Me
      </Button>

      {/* Social Media Icons */}
      <Box sx={{ display: "flex", gap: 2, marginTop: 4 }}>
        <IconButton
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            },
          }}>
          <InstagramIcon />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            },
          }}>
          <WhatsAppIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Hero;
