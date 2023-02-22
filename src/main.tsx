import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./Current/App";
import App from "./libarary/Features/CounterWithState/App";
import "./reset.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Breaks down the process of root creation.
// const rootElement = document.getElementById("root") as HTMLElement;
// const root = ReactDOM.createRoot(rootElement);
// root.render(<div>Whoa!</div>);
