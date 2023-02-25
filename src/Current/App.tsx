import styled from "@emotion/styled";
import { useState } from "react";
import Box from "./Box";
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

interface Boxes {
  id: number;
  on: boolean;
}
export default function App(): JSX.Element {
  const [boxes, setBoxes] = useState<Boxes[]>(boxesArray);

  const toggleDarkMode = function (boxId: number) {
    const getNewBoxState = function (oldBoxState: Boxes[]): Boxes[] {
      const newBoxState = oldBoxState.map((box) => {
        if (box.id === boxId) {
          return { ...box, on: !box.on };
        } else return box;
      });
      return newBoxState;
    };

    setBoxes((oldBoxState) => getNewBoxState(oldBoxState));
  };

  const boxArray = boxes.map((box) => (
    <Box
      key={box.id}
      isDark={box.on}
      handleClick={() => toggleDarkMode(box.id)}
    ></Box>
  ));
  return <StyledApp>{boxArray}</StyledApp>;
}
