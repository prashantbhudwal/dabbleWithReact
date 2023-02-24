import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./Current/App";
import App from "./learningReact/PureComponent/App";

import "./reset.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
