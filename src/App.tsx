import React from "react";
import { ThemeProvider } from "styled-components";
import Navigation from "./navigation";
import { theme } from "./styles";
import "./styles/init.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
