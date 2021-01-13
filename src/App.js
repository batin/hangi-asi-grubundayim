import "./App.scss";
import { Questions } from "./Questions/Questions.js";
import { WithInfo } from "./Hocs/With-info";
import Richie from "./Assets/richie.svg";

function App() {
  return (
    <div className="App">
      <WithInfo>
        <h1 className="heading">Hangi aşı grubundayım?</h1>
        <Questions />
        <img className="homepage-icon" src={Richie} alt="Homepage Icon" />
      </WithInfo>
    </div>
  );
}

export default App;
