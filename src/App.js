import "./styles/style.scss";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Nav />
        <Home />
        <About />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
