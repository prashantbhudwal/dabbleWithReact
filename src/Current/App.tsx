import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import "./styles.css";
import { ThemeContext } from "./themeContext";



function App() {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = function () {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const contextValue: [string, () => void] = [theme, toggleTheme];
  return (
    //TODO Unable to remove the TS squiggly line from value
    <ThemeContext.Provider value={contextValue}>
      <Header />
      <Button />
    </ThemeContext.Provider>
  );
}
export default App;
