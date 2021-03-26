import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { WithInfo } from "./Hocs/With-info";
import { WithTheme } from "./Hocs/With-theme";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <WithTheme>
      <WithInfo>
        <App />
      </WithInfo>
    </WithTheme>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
