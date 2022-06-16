import logo from './logo.svg';
import About from './components/About';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Socials from './components/Socials';
import './App.css';

function App() {
  return (

    // <main className="text-gray-400 bg-green-600 body-font">
  <main className="text-gray-400 bg-gradient-to-r from-cyan-800 to-blue-500 body-font">
    <NavBar />
    <About />
    <Projects />
    <Skills />
    {/* <Testimonials /> */}
 
    {/* <Socials /> */}
  </main>

  //   <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
  //   <p className="text-3xl text-gray-700 font-bold mb-5">
  //     Welcome!
  //   </p>
  //   <p className="text-gray-500 text-lg">
  //     React and Tailwind CSS in action
  //   </p>
  // </div>
    // <main className='text-gray-400 bg-gray-900 body-font'>
    // <div className="App">
    //   <Navbar />
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Portfolio
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //     </a>
    //     <About />
    //   </header>
    // </div>
    // </main>
  );
}

export default App;
