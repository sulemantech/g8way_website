import { useRef } from "react";
import "./App.css";
import Home from "./components/Home";
import OurMission from "./components/OurMission";
import TrustedComp from "./components/TrustedComp";
import LottieAnimationComponent from "./components/LottieAnimationComponent";
import Features from "./components/Features";
import About from "./components/About";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";

function App() {
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-[1920px] mx-auto">
      <div ref={homeRef}>
        <Home scrollToSection={scrollToSection} refs={{ home: homeRef, features: featuresRef, about: aboutRef, contact: contactRef }} />
      </div>
      <OurMission />
      <TrustedComp />
      <LottieAnimationComponent />
      <div className="bg-black" ref={featuresRef}>
        <Features />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Collaboration />
        <Footer />
      </div>
    </div>
  );
}

export default App;
