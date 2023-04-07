import "./styles/style.scss";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
function App() {
  return (
    <div className="App">
      <div className="page">
        <Nav />
        <Home />
      </div>
    </div>
  );
}

export default App;
