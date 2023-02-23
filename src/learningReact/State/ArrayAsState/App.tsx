import styled from "@emotion/styled";
import { useState } from "react";
const StyledApp = styled.div``;

function App(): JSX.Element {
  const [things, setThings] = useState<string[]>(["Thing 1", "Thing 2"]);
  const thingsElements = things.map((thing) => <p key={thing}>{thing}</p>);
  const addItem = (): void =>
    setThings((prevState) => [...prevState, `Thing ${prevState.length + 1}`]);

  return (
    <StyledApp>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </StyledApp>
  );
}
export default App;
