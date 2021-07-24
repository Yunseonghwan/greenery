import React from "react";
import { ThemeProvider } from "styled-components";
import Navigation from "./navigation";
import { theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
