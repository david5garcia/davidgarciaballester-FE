import "./App.scss";
import Navbar from "./features/Navbar/components/Navbar";
import Hero from "./features/Hero/components/Hero";
import Technologies from "./features/Technologies/components/Technologies";
import Projects from "./features/Projects/components/Projects";
import "./components/Card.scss";
import ArrowLottie from "./features/Hero/components/ArrowLottie";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <ArrowLottie />
        <Projects />
        <Technologies />
      </main>
    </>
  );
}

export default App;
