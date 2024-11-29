import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@fontsource/league-spartan"; // Defaults to weight 400

const theme = createTheme({
  typography: {
    fontFamily: "'League Spartan', sans-serif",
  },
  palette: {
    mode: "dark", // Activates dark mode for the theme
    background: {
      default: "#000", // Black background
      paper: "#121212", // Slightly lighter black for paper elements
    },
    text: {
      primary: "#fff", // White text
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
