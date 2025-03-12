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
import Header from "./components/UI/Header";
import Squares from "./components/UI/Squares";

function App() {
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-[1920px] mx-auto ">
      <div ref={homeRef} className="relative bg-[#071010]">
        {/* Background Squares - Ensure it's behind everything */}
        {/* <Squares
          squareSize={90}
          borderColor="#0c1f1f"
          bgColor="#071010"
          opacity="opacity-30"
          className="absolute inset-0 -z-20" // Lower z-index to stay behind everything
        /> */}
        {/* <img src="barsbghome.png" alt="" /> */}
          <img className='absolute top-0 z-50 ' src="barsbghome.png" alt="" />
          <img className='absolute top-0 z-[9999] ' src="StarBg.png" alt="" />
          <img className='absolute top-0 z-0 border right-0' src="Star36.png" alt="" />


        {/* Sticky Header */}
        <div className="w-full max-md:sticky top-0 left-0 z-[99999] bg-transparent">
          <Header
            scrollToSection={scrollToSection}
            refs={{ home: homeRef, features: featuresRef, about: aboutRef, contact: contactRef }}
          />
        </div>

        {/* Home Content */}
        <div className="relative ">
          <Home scrollToSection={scrollToSection} ref={homeRef} />
        </div>
      </div>

      <OurMission />
      <TrustedComp />
      <LottieAnimationComponent />
      <div className="bg-[#050C0C]" ref={featuresRef}>
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
