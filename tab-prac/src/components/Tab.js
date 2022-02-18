import React, { useState } from "react";
import styled from "styled-components";

const Tab = () => {
  const [currentTab, setCurrntTab] = useState(0);

  const menuArr = [
    { name: "TAB 1", content: "Tab menu ONE" },
    { name: "TAB 2", content: "Tab menu TWO" },
    { name: "TAB 3", content: "Tab menu THREE" },
  ];

  const selectMenuHandler = (index) => {
    setCurrntTab(index);
  };

  return (
    <>
      <div>
        <TabMenu>
          {menuArr.map((el, index) => {
            return (
              <li
                key={index}
                className={`${
                  index === currentTab ? "submenu focused" : "submenu"
                }`}
                onClick={() => selectMenuHandler(index)}
              >
                {el.name}
              </li>
            );
          })}
        </TabMenu>
        <Desc>
          <p>{menuArr[currentTab].content}</p>
        </Desc>
      </div>
    </>
  );
};

const TabMenu = styled.ul`
  color: rgba(73, 73, 73, 0.5);
  background-color: #dcdcdc;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;
  height: 40px;

  .submenu {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    cursor: pointer;
  }

  .focused {
    display: flex;
    align-items: center;
    background-color: gray;
    color: white;
    height: 100%;
    transition: 1s;
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

export default Tab;
