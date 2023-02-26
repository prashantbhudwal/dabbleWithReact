import { Children, createContext } from "react";
const { Provider, Consumer } = createContext("test");

function ThemeContextProvider(props: any) {
  return <Provider value={"light"}>{props.Children}</Provider>;
}

export { ThemeContextProvider, Consumer };
