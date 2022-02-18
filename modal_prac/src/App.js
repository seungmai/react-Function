import Modal from "./Modal";
import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  const [isShowing, setIsShowing] = useState(false);
  const openModal = () => {
    setIsShowing(true);
  };

  useEffect(() => {
    if (isShowing) {
      const notiTimer = setTimeout(() => {
        setIsShowing(false);
      }, 3000);
      return () => clearTimeout(notiTimer);
    }
  }, [isShowing]);

  return (
    <>
      <Title>Modal</Title>
      <Button onClick={openModal}>Open modal</Button>
      <div>{isShowing && <Modal message="This is Modal" />}</div>
    </>
  );
}

const Title = styled.h1`
  text-align: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  width: 200px;
  height: 30px;
  border: 1px solid orange;
  border-radius: 20px;
  background-color: orange;
  box-shadow: 5px 5px 5px 0px gray;
`;

export default App;
