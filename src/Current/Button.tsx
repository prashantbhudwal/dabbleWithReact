import { useContext } from "react";
import { ThemeContext } from "./themeContext";

type clickHandler = () => void;
interface handleClick {
  handleClick: clickHandler;
}

function Button({ handleClick }: handleClick) {
 const theme = useContext(ThemeContext);
  return (
    <button className={`${theme}-theme`} onClick={handleClick}>
      Switch Theme
    </button>
  );
}

export default Button;
