import "./styles/style.scss";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
function App() {
  return (
    <div className="App">
      <div className="page">
        <Nav />
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
