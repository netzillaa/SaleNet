import React from "react";
import ReactDOM from "react-dom";
import "../src/css/index.css";
import App from "./App";
import GlobalState from "./components/pages/dashboard/reducer/GlobalState";

ReactDOM.render(
  <React.StrictMode>
    <GlobalState>
      <App />
    </GlobalState>
  </React.StrictMode>,
  document.getElementById("root")
);
