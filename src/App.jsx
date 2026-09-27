import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Impact from "./sections/Impact";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Startup from "./sections/Startup";
import Training from "./sections/Training";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />
        <Impact />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Startup />
        <Training />
        <Resume />
        <Contact />
      </main>

      <footer className="footer">
      <p>
         © {new Date().getFullYear()} Aravinth Kanagaraj. All rights reserved.
      </p>
      </footer>

    </div>
  );
}

export default App;