import styled from "@emotion/styled";
import { useState } from "react";

const StyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  height: 100px;
  padding: 100px;

  & button {
    height: 30px;
    width: 100px;
  }
`;

function App(): JSX.Element {
  let [count, setCount] = useState<number>(0);

  const increaseCount = function (): void {
    setCount((state) => state + 1);
  };

  return (
    <>
      <StyledComponent>
        <button onClick={increaseCount}>Click Me</button>
        <div>{count}</div>
      </StyledComponent>
    </>
  );
}
export default App;
