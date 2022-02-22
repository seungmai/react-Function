import React from "react";
import { createGlobalStyle } from "styled-components";

import ToDoTemplate from "./components/ToDoTemplate";
import ToDoHead from "./components/ToDoHead";
import ToDoList from "./components/ToDoList";
import ToDoCreacte from "./components/ToDoCreate";

function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <ToDoTemplate>
          <ToDoHead />
          <ToDoList />
          <ToDoCreacte />
        </ToDoTemplate>
      </>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

export default App;
