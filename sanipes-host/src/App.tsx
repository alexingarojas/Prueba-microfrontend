import React from "react";
import { createRoot } from "react-dom/client";
import Login from "login/Login";

import "./index.css";

const App = () => (
  <div className="container">
    <Login />
  </div>
);
const root = document.getElementById("app");
const reactRoot = createRoot(root);
reactRoot.render(<App />);
// ReactDOM.render(<App />, document.getElementById("app"));
