import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import LegalInformation from './components/LegalInformation.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/legalinformation" element={<LegalInformation />} />
    </Routes>
    </BrowserRouter>

  </StrictMode>,
)
