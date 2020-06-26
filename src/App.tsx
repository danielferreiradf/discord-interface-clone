import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "./components/Layout";

import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
