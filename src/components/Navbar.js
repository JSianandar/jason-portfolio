import React, { useState } from "react";
import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import DescriptionIcon from "@mui/icons-material/Description";

// Custom styled button with hover effect and conditional border
const StyledButton = styled(Button)(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : "white",
  border: active ? `2px solid rgba(255, 255, 255, 0.5)` : "none",
  borderRadius: "8px",
  padding: "8px 16px",
  fontSize: "1.1rem", // Increased font size for menu items
  fontWeight: "bold", // Optional: Make the text bold
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(""); // Track the currently active menu item

  const handleMenuClick = (menu) => {
    setActiveMenu(menu); // Set the active menu item
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#191970", padding: "8px 16px" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        {/* Left Menu Items */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {["Home", "About", "Work Experiences", "Projects", "Contact"].map(
            (menu) => (
              <StyledButton
                key={menu}
                active={activeMenu === menu}
                onClick={() => handleMenuClick(menu)}>
                {menu}
              </StyledButton>
            )
          )}
        </Box>

        {/* Right Section */}
        <Button
          variant="contained"
          color="secondary"
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1F51FF",
            color: "white",
            borderRadius: "8px",
            padding: "8px 16px",
            fontSize: "1.25rem", // Increased font size for the CV button
            fontWeight: "bold", // Optional: Make the text bold
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
          startIcon={<DescriptionIcon />}>
          Download CV
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
