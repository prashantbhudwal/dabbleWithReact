import React from "react";
import ReactDOM from "react-dom/client";
import Basics, { JSXNavBar, TestingJSX } from "./Basics/Basics";
import { NestedList } from "./Basics/Basics";
import Button from "./Components/Button/Button";
// import App from "./App";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <Basics />
    <NestedList />
    <TestingJSX />
    <JSXNavBar />
  </React.StrictMode>
);

// Breaks down the process of root creation.
// const rootElement = document.getElementById("root") as HTMLElement;
// const root = ReactDOM.createRoot(rootElement);
// root.render(<div>Whoa!</div>);
