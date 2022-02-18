import React from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

const Modal = (props) => {
  const { message } = props;
  document.getElementById("modal");
  return (
    <ModalWrap>
      <Message>
        <p>
          {message}
          <br />
          안녕하세요!
        </p>
      </Message>
    </ModalWrap>
  );
};

const ModalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 30;
  left: 0;
  width: 100%;
  height: 50px;
`;

const Message = styled.div`
  width: 30%;
  height: 100px;
  text-align: center;
  border-radius: 30;
  background-color: orange;
  font-size: 20px;
  color: white;
  margin-top: 50px;
  box-shadow: 5px 5px 5px 0px gray;
`;

export default Modal;
