import React from "react";
import "./App.scss";
import { WithInfo } from "./Hocs/With-info";
import Richie from "./Assets/richie.png";
import twitter from "./Assets/twitter.webp";
import { Content } from "./Content/Content";
import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: 'GTM-WRQT75N',
    dataLayer: {
      event: "pageview"
    }
}
 
TagManager.initialize(tagManagerArgs)

function App() {  
  return (
    <div className="App">
      <WithInfo>
        <h1 className="heading">Hangi aşı grubundayım?</h1>
        <Content/>
        <img className="homepage-icon" src={Richie} alt="Homepage Icon" />
      </WithInfo>
      <p className="info">*Hesaplamalar tahmini veriler ile yapılmaktadır.</p>
      <a href="https://twitter.com/btnerylmz" target="_blank" rel="noreferrer"><img className="twitter-icon" src={twitter} alt="Twitter Icon" /></a>
    </div>
  );
}

export default App;
