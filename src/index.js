import React from "react";
import "./index.scss";
import App from "./App";
import { WithInfo } from "./Hocs/With-info";
import { WithTheme } from "./Hocs/With-theme";

import { createRoot } from 'react-dom/client';
const container = document.getElementById("root")
const root = createRoot(container); 
import { BrowserRouter } from 'react-router-dom';

root.render(
  <BrowserRouter>
  <WithTheme>
    <WithInfo>
      <App />
    </WithInfo>
  </WithTheme>
</BrowserRouter>);
