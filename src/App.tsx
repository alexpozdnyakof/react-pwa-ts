import "./App.scss";
import { Topbar } from "./Layout/Topbar";
import { Stack } from "./Layout/Stack";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Stack />
      </div>
    </div>
  );
}

export default App;
