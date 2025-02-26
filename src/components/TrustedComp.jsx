import React from 'react'
import TrustedCompCard from './UI/TrustedCamCard'
import DownloadTheApp from './UI/DownloadTheApp'

function TrustedComp() {
  return (
    <div className='bg-black  font-roboto flex flex-col items-center justify-center min-h-[763px]'>
      <div className='flex flex-col items-center justify-between w-[1292px] max-[1300px]:w-full min-h-[603px]'>
      <p className="text-white font-bold text-[46px] leading-[46px] tracking-[2%] text-center font-roboto uppercase">G8WAY is your <br /> <span className='text-[#10E0D7]'>trusted companion</span></p>
      <div className='flex space-x-4 w-[1292px] max-[1300px]:w-full max-[1300px]:grid max-[1300px]:grid-cols-3 max-[1300px]:place-items-center max-[768px]:grid-cols-1 max-[1300px]:gap-4'>
        <TrustedCompCard Image={"FindYourWay.svg"} Text={"Find your way to the gate with ease"} />
        <TrustedCompCard Image={"GetRealTimeFlightUpdates.svg"} Text={"Get real-time flight updates"} />
        <TrustedCompCard Image={"ReceivePersonailzed.svg"} Text={"Receive personalized recommendations for shops and lounges"} />
        <TrustedCompCard Image={"Securitychack.svg"} Text={"Get seamless Check-In and Security Control"} />
        <TrustedCompCard Image={"flightticket.svg"} Text={"Information about the next connecting flight"} />
      </div>
      <p className='font-semibold text-[21px] leading-[29px] tracking-[0.23px] text-center text-[#86868B] '>Whether you’re finding your way to the gate, checking real-time flight <br /> updates, or seeking personalized recommendations for shops and lounges,<br /> G8WAY is your trusted companion.</p>
      <div className=''>
      <DownloadTheApp/>
      </div>
      </div>
    </div>
  )
}

export default TrustedComp
