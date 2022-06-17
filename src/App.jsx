import About from "./components/About";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  return (
    <main className="text-gray-400 bg-gradient-to-r from-cyan-800 to-blue-500 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}

export default App;
