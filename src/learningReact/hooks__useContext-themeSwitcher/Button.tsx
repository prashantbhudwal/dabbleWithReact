import { useContext } from "react";
import { ThemeContext } from "./themeContext";

function Button() {
  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
    // Unable to resolve this squiggly line under OnClick
    <button className={`${theme}-theme`} onClick={toggleTheme}>
      Switch Theme
    </button>
  );
}

export default Button;
