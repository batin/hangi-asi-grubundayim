import React, { useEffect } from "react";
import "./App.scss";
import Router from "./utils/Router";


function App() {

  useEffect(() => {
    window.send({ event: `PageView` })
  }, [])

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
