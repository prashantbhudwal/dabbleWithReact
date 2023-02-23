import React from "react";
import ReactDOM from "react-dom/client";

const message = <p> A standalone react dom. </p>;

const el = document.getElementById("injection") as HTMLElement;
const root = ReactDOM.createRoot(el);
root.render(message);
