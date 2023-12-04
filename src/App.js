import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Signup from "./Components/Signup";

const theme = createTheme({
  typography: {
    useNextVariants: true,
    // fontFamily: '"Nunito Sans", sans-serif',
    fontFamily: "'Inter', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          "&:hover": {},
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Signup />
    </ThemeProvider>
  );
}

export default App;

// background: -webkit-radial-gradient(bottom left,rgba(31, 169, 17, 0.81),rgba(47, 21, 208, 1),rgba(0, 0, 0, 0)), url("https://img.freepik.com/premium-photo/background-gradient-black-overlay-abstract-background-black-night-dark-evening-with-space-text-backgroundx9_661047-838.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701302400&semt=ais");
