import styled from "@emotion/styled";
import Button from "./Button";
import Header from "./Header";
import "./styles.css";
import ThemeContext from "./themeContext";

const StyledApp = styled.div``;

function App() {
  return (
    <ThemeContext.Provider value={"light"}>
      <StyledApp>
        <Header />
        <Button />
      </StyledApp>
    </ThemeContext.Provider>
  );
}
export default App;
