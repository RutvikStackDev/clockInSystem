import "./App.css";
import AddStaff from "./Components/AddStaff/AddStaff";
import DateTime from "./Components/DateTime/DateTime";

function App() {
  return (
    <div className="App">
      {/* <div>Hello World !</div> */}
      <DateTime />
      <AddStaff />
    </div>
  );
}

export default App;
