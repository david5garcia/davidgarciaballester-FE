import "./App.scss";
import Navbar from "./features/Navbar/components/Navbar";
import Hero from "./features/Hero/components/Hero";
import Technologies from "./features/Technologies/components/Technologies";
import Projects from "./features/Projects/components/Projects";
import AboutMe from "./features/AboutMe/components/AboutMe";
import "./components/Card.scss";
import ArrowLottie from "./features/Hero/components/ArrowLottie";
import { useEffect } from "react";
import ReactGA from "react-ga4";

ReactGA.initialize("G-9JC19HLV3C");

function App() {
  useEffect(() => {
    ReactGA.send("pageview");
  }, []);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <ArrowLottie />
        <AboutMe />
        <Technologies />
        <Projects />
      </main>
    </>
  );
}

export default App;
