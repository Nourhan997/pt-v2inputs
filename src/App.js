import "./App.css";
import Input from "./reusable-input";

function App() {
  return (
    <div className="App">
      <Input
        type="text"
        className="text-input"
        placeholder="Enter text"
        required
        errorMessage="This field is required"
      />
    </div>
  );
}

export default App;
