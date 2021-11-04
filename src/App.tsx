import React from "react";
import Routes from "./routes";
import GlobalStyles from "./styles/global";
import { Container } from "./styles/styles";

const App = () => {
  return (
    <Container>
      <Routes />
      <GlobalStyles />
    </Container>
  );
};

export default App;
