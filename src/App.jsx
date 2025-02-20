import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import OurMission from './components/OurMission'
import TrustedComp from './components/TrustedComp'
import LottieAnimationComponent from './components/LottieAnimationComponent'
import Features from './components/Features'
import About from './components/About'
import Collaboration from './components/Collaboration'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Home/>
    <OurMission/>
    <TrustedComp/>
    <LottieAnimationComponent/>
    <Features/>
    <About/>
    <Collaboration/>
    <Footer/>
    </>
  )
}

export default App
