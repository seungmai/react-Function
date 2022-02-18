import React from "react";
import styled from "styled-components";

import Toggle from "./components/Toggle";

function App() {
  return (
    <div className="App">
      <Title>Toggle</Title>
      <Toggle />
    </div>
  );
}

const Title = styled.h1`
  text-align: center;
`;

export default App;
