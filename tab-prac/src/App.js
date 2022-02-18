import React from "react";
import styled from "styled-components";

import Tab from "./components/Tab";

function App() {
  return (
    <div className="App">
      <Title>Tab</Title>
      <Tab />
    </div>
  );
}

const Title = styled.h1`
  text-align: center;
`;

export default App;
