import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import "./styles.css";
import { ThemeContext } from "./themeContext";

function App() {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <Header />
      <Button />
    </ThemeContext.Provider>
  );
}
export default App;
