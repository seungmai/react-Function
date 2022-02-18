import React from "react";
import styled from "styled-components";

import Tag from "./components/Tag";

function App() {
  return (
    <div className="App">
      <Title>Tag</Title>
      <Tag />
    </div>
  );
}

const Title = styled.h1`
  text-align: center;
`;

export default App;
