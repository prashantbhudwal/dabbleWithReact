import styled from "@emotion/styled";
import Button from "./Button";
import Header from "./Header";
import "./styles.css";
import { ThemeProvider } from "./ThemeProvider";

function App() {
  const switchTheme = function () {
    console.log("Switched");
  };

  return (
    <ThemeProvider>
      <Header />
      <Button handleClick={switchTheme} />
    </ThemeProvider>
  );
}
export default App;
