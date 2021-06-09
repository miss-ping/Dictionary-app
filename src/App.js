import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary app</h1>
          <p>Type a word to look up</p>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center App-footer">
          <a href="https://github.com/miss-ping/dictionary-app">Open source </a>
          coded by Sílvia Ping
        </footer>
      </div>
    </div>
  );
}

export default App;
