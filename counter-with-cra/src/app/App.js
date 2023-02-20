import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="리액트" />
        <p>
          <code>src/App.js</code> 파일을 수정하면{" "}
          <abbr title="Hot Module Replacement">HMR</abbr> Live Reload 됩니다.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React를 배우러 가자!
        </a>
      </header>
    </div>
  );
}

export default App;
