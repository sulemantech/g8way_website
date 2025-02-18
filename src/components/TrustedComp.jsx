import React from 'react'
import TrustedCompCard from './UI/TrustedCamCard'
import DownloadTheApp from './UI/DownloadTheApp'

function TrustedComp() {
  return (
    <div className='bg-black flex flex-col items-center justify-around font-roboto min-h-[763px]'>
      <p className="text-white font-bold text-[46px] leading-[46px] tracking-[2%] text-center uppercase">G8WAY is your <br /> <span className='text-[#10E0D7]'>trusted companion</span></p>
      <div className='flex space-x-6'>
        <TrustedCompCard Image={"FindYourWay.svg"} Text={"Find your way to the gate with ease"} />
        <TrustedCompCard Image={"GetRealTimeFlightUpdates.svg"} Text={"Get real-time flight updates"} />
        <TrustedCompCard Image={"ReceivePersonailzed.svg"} Text={"Receive personalized recommendations for shops and lounges"} />
        <TrustedCompCard Image={"Securitychack.svg"} Text={"Get seamless Check-In and Security Control"} />
        <TrustedCompCard Image={"flightticket.svg"} Text={"Information about the next connecting flight"} />
      </div>
      <p className='font-semibold text-[21px] leading-[29px] tracking-[0.23px] text-center text-[#86868B] uppercase'>Whether you’re finding your way to the gate, checking real-time flight <br /> updates, or seeking personalized recommendations for shops and lounges,<br /> G8WAY is your trusted companion.</p>
      <div>
      <DownloadTheApp/>
      </div>
    </div>
  )
}

export default TrustedComp
