import React from 'react'
import TrustedCompCard from './UI/TrustedCamCard'
import DownloadTheApp from './UI/DownloadTheApp'

function TrustedComp() {
  return (
    <div className='bg-[#050C0C]  font-roboto flex flex-col items-center justify-center min-h-[763px] max-md:py-10'>
      <div className='flex flex-col items-center justify-between w-[1292px] max-[1300px]:w-full min-h-[603px]'>
        <p className="text-white font-bold text-[46px] mt-[18px] leading-[46px] max-md:min-w-[91.47vw] max-md:min-h-[102px] tracking-[2%] max-md:text-[32px] max-md:leading-[34px] text-center font-roboto uppercase max-md:pb-4">G8WAY <span className='md:hidden'><br /></span> is your <span className='max-md:hidden'> <br /> </span> <span className='text-[#10E0D7] max-md:hidden'>trusted companion</span> <span className='text-[#10E0D7] md:hidden'>Ultimate Travel Partner</span></p>
        <div className='flex space-x-4 items-center justify-center min-h-[169px] w-[1292px] max-md:w-[91.47vw] max-[1300px]:w-full max-[1300px]:grid max-[1300px]:grid-cols-3 max-[1300px]:place-items-center max-[768px]:grid-cols-1 max-[1300px]:gap-4'>
          <TrustedCompCard NumberText={"01"} Image={"GetRealTimeFlightUpdates.svg"} Text={"Get real-time /n flight updates"} />
          <TrustedCompCard NumberText={"02"} Image={"FindYourWay.svg"} Text={"Find your way to /n the gate /n with ease"} />
          <TrustedCompCard NumberText={"03"} Image={"ReceivePersonailzed.svg"} Text={"Receive personalized /n recommendations /n  for shops and lounges"} />
          <TrustedCompCard NumberText={"04"} Image={"Securitychack.svg"} Text={"Get seamless Check-In /n and Security Control"} />
          <TrustedCompCard NumberText={"05"} Image={"flightticket.svg"} Text={"Information about the /n next connecting flight"} />
        </div>
        <p className='font-semibold font-inter max-md:font-roboto text-[21px] leading-[29px] max-md:font-normal max-md:text-[18px] max-md:leading-[22.5px] tracking-[0.23px] max-md:text-left text-center max-md:tracking-[0%] text-[#86868B] max-md:text-[#f0f0f0] max-md:w-[91.47%] max-md:max-h-[115px] max-md:min-h-[115px] max-md:my-8'>Whether you’re finding your way to the gate, checking real-time flight <br /> updates, or seeking personalized recommendations for shops and lounges,<br /> G8WAY is your trusted companion.</p>
        <div className=''>
          <DownloadTheApp className={"max-sm:!w-[91.47vw] max-sm:!h-[56px] max-md:!font-roboto max-md:!font-medium"} />
        </div>
      </div>
    </div>
  )
}

export default TrustedComp
