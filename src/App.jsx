import About from "./components/About";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import FadeInSection from "./components/FadeIn";
import "./App.css";

function App() {
  return (
    <main className="text-gray-400 bg-gradient-to-r from-cyan-800 to-blue-500 body-font scroll-smooth">
      <NavBar />
      <FadeInSection>
        <About />
        <Projects />
        <Skills />

      </FadeInSection>
    </main>
  );
}

export default App;
