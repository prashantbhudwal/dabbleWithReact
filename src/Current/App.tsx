import styled from "@emotion/styled";
import { useState } from "react";
import boxesArray from "./boxes";

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding: 1em;
  background-color: silver;
`;

interface StyledBoxProps {
  isDark: boolean;
}

const StyledBox = styled.div<StyledBoxProps>`
  background-color: ${(props) => (props.isDark ? "black" : "white")};
  border: 1px solid black;
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;
interface Boxes {
  id: number;
  on: boolean;
}
export default function App(): JSX.Element {
  const [boxes, setBoxes] = useState<Boxes[]>(boxesArray);

  const boxArray = boxes.map((box) => (
    <StyledBox key={box.id} isDark={box.on}></StyledBox>
  ));
  return <StyledApp>{boxArray}</StyledApp>;
}
