import "./App.scss";
import Navbar from "./features/Navbar/components/Navbar";
import Hero from "./features/Hero/components/Hero";
import Technologies from "./features/Technologies/components/Technologies";
import Projects from "./features/Projects/components/Projects";
import AboutMe from "./features/AboutMe/components/AboutMe";
import "./components/Card.scss";
import ArrowLottie from "./features/Hero/components/ArrowLottie";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

ReactGA.initialize("G-9JC19HLV3C");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
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
