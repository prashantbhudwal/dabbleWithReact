import styled from "@emotion/styled";
import { useState } from "react";
import boxesArray from "./boxes";

const StyledApp = styled.div`
  div {
    border: 1px solid black;
    width: 100px;
    height: 100px;
  }
`;

export default function App(): JSX.Element {
  interface Boxes {
    id: number;
    on: boolean;
  }

  const [boxes, setBoxes] = useState<Boxes[]>(boxesArray);

  const boxArray = boxes.map((box) => <div key={box.id}></div>);
  return (
    <StyledApp>
      <h1>{boxArray}</h1>
    </StyledApp>
  );
}
