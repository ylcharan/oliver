import logo from "./logo.svg";
import "./styles/main.scss";
import Index from "./views";
import About from "./views/about";
import Projects from "./views/projects";

function App() {
  return (
    <div className="App">
      <Index />
      <About />
      <Projects />
    </div>
  );
}

export default App;
