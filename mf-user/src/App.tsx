import React from "react";
import { createRoot } from "react-dom/client";

// Login
import Login from "./components/Login";

const App = () => (
  <><Login/></>
);
const root = document.getElementById('app')as HTMLElement;
const reactRoot = createRoot(root);
reactRoot.render(<App />);
