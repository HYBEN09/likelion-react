import Counter from "../components/Counter.function";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter count={10} />
      <Counter step={2} />
    </div>
  );
}

export default App;
