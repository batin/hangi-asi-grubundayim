import "./App.scss";
import { Questions } from "./Questions/Questions.js";
import { WithInfo } from "./Hocs/With-info";

function App() {
  return (
    <div className="App">
      <WithInfo >
        <Questions />
      </WithInfo>
    </div>
  );
}

export default App;
