import styled from "@emotion/styled";
import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import "./styles.css";
import { ThemeContextProvider } from "./themeContext";

function App() {
  const switchTheme = function () {
    console.log("Switched");
  };

  return (
    <ThemeContextProvider>
      {/* <Header /> */}
      <Button handleClick={switchTheme} />
    </ThemeContextProvider>
  );
}
export default App;
