import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Dsa from './components/Dsa';
import OpenSource from './components/OpenSource';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Dsa />
        <OpenSource />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
