import styled from "@emotion/styled";
import { useState } from "react";
import Count from "./Count";

const StyledApp = styled.div`
  .counter {
    font-family: "Inter", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #262626;
    height: 100vh;
    margin: 0;
    color: #d9d9d9;
    padding: 20px;
  }

  .counter > button {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background-color: #737373;
    color: #d9d9d9;
    font-size: 1.5rem;
  }

  .counter > button:hover {
    background-color: #404040;
    color: #d9d9d9;
  }

  .counter > button:focus {
    outline: none;
  }

  .counter--count {
    background-color: white;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #262626;
  }

  .counter--plus {
    margin-left: -20px;
  }

  .counter--minus {
    margin-right: -20px;
    z-index: 1;
  }
`;

export default function App() {
  const [count, setCount] = useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <StyledApp>
      <div className="counter">
        <button className="counter--minus" onClick={subtract}>
          –
        </button>
        <Count count={count}></Count>
        <button className="counter--plus" onClick={add}>
          +
        </button>
      </div>
    </StyledApp>
  );
}
