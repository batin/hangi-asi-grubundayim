import React from "react";
import "./App.scss";
import { WithInfo } from "./Hocs/With-info";
import Richie from "./Assets/richie.png";
import { Content } from "./Content/Content";

function App() {  
  return (
    <div className="App">
      <WithInfo>
        <h1 className="heading">Hangi aşı grubundayım?</h1>
        <Content/>
        <img className="homepage-icon" src={Richie} alt="Homepage Icon" />
      </WithInfo>
    </div>
  );
}

export default App;
