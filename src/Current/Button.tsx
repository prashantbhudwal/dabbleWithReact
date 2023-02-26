import { useContext } from "react";
import { ThemeContext } from "./themeContext";

type clickHandler = () => void;
interface handleClick {
  handleClick: clickHandler;
}

function Button() {
 const [theme, toggleTheme] = useContext(ThemeContext);
  return (
    <button className={`${theme}-theme`} onClick={toggleTheme}>
      Switch Theme
    </button>
  );
}

export default Button;
