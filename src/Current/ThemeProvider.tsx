import { ThemeContext } from "./themeContext";

function ThemeProvider(props: any) {
  console.log(props);
  return (
    <ThemeContext.Provider value={"light"}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
