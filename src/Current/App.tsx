import styled from "@emotion/styled";
import Button from "./Button";
import Header from "./Header";
import "./styles.css";
import ThemeContext from "./themeContext";

const StyledApp = styled.div``;

function App() {
  const switchTheme = function () {
    console.log("Switched");
  };

  return (
    <ThemeContext.Provider value={"light"}>
      <StyledApp>
        <Header />
        <Button handleClick={switchTheme} />
      </StyledApp>
    </ThemeContext.Provider>
  );
}
export default App;
