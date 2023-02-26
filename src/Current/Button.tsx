import { ThemeContextProvider } from "./themeContext";
import { useContext } from "react";

type clickHandler = () => void;
interface handleClick {
  handleClick: clickHandler;
}

function Button({ handleClick }: handleClick) {
  const theme = useContext(ThemeContextProvider);
  return (
    <button className={`${theme}-theme`} onClick={handleClick}>
      Switch Theme
    </button>
  );
}

export default Button;
