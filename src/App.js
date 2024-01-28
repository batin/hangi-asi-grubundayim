import React from 'react';
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage";
import { Page } from './Pages';
import { useTheme } from "./Context/Theme";

import "./App.scss";

function App() {
  const { theme } = useTheme();


  return (
    <div className="App" style={theme.body}>
        <Routes>
          <Route path="/1.html" />
          <Route path="/2.html" />
          <Route path="/3.html" />
          <Route path="/4.html" />
          <Route exact path="/" element={<Page />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </div>
  );
}

export default App;
