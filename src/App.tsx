import "./App.css";
import Navbar from "./features/Navbar/components/Navbar";
import Card from "./components/Card";
import Hero from "./features/Hero/components/Hero";
import Technologies from "./features/Technologies/components/Technologies";
import Projects from "./features/Projects/components/Projects";
import "./components/Card.scss"

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Technologies />
        <Projects />
      </main>
    </>
  );
}

export default App;
