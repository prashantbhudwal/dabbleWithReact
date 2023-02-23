import styled from "@emotion/styled";
import { useState } from "react";

const StyledApp = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  gap: 2em;
`;

function App(): JSX.Element {
  let [state, setState] = useState<number>(0);

  const incrementMethodOneDirect = () => {
    setState(state + 1);
    console.log(state);
    setState(state + 1);
    console.log(state);
    setState(state + 1);
    console.log(state);
  };
  const incrementMethodTwoPreviousState = () => {
    const setStateCallback = function (previousState: number): number {
      console.log(previousState);
      return previousState + 1;
    };

    setState((state) => setStateCallback(state));
    // console.log(state);
    setState((state) => setStateCallback(state));
    // console.log(state);
    setState((state) => setStateCallback(state));
    // console.log(state);
  };

  return (
    <StyledApp>
      <div>{state}</div>
      <button onClick={incrementMethodOneDirect}>Method 1: Direct</button>
      <button onClick={incrementMethodTwoPreviousState}>
        Method 2: Previous State
      </button>
    </StyledApp>
  );
}
export default App;
