import React from 'react'
import CountUp from './CountUp'
import Squares from './Squares';

function PerformanceOverview() {
  return (
    <div className='flex flex-col overflow-hidden items-center relative  justify-center h-[874px] max-lg:h-auto max-md:min-h-fit'>
      {/* <div className='absolute top-0 bg-amber-500 border border-amber-500 z-50'>
      <Squares
        squareSize={90}
        borderColor="#0c1f1f"
        bgColor='#071010'
        opacity={"opacity-100"}
      />
      </div> */}
      <p className='font-roboto text-white font-bold text-[35px] leading-[35px] tracking-[2%] max-md:text-[28px] max-md:leading-[32px] text-center uppercase'><span className='text-[#10E0D7]'> G8WAY </span> Performance <span className='text-[#10E0D7]'> Overview </span>  </p>
      <div className='flex flex-col justify-between w-[870px] max-lg:max-w-[90vw] h-[658px] max-lg:h-auto'>
      <div className='absolute  max-md:hidden -top-12 left-0'>
        <img src="BarsBgRight.png" alt="" />
      </div>
      <div className='absolute  max-md:hidden -top-12 right-0'>
        <img src="BarsBgleft.png" alt="" />
      </div>
        <StatsCard
          widthClass="w-[870px]"
          heightClass="h-[303px]"
          countUpFrom={0}
          countUpTo={40}
          widthDescription="w-[500px]"
          radicalBlur=" h-[337.83px] w-[364.34px] max-md:!h-[335.03px] max-md:!w-[179.96px]"
          countUpDuration={1}
          title="Wait Time Reduction"
          countUpClass="font-roboto font-bold text-[80px] leading-[88px] tracking-[0] text-center bg-linear-to-b from-[#10E0D7] to-[#01625E] bg-clip-text text-transparent  max-md:font-roboto max-md:font-bold max-md:text-[60px] max-md:leading-[66px] max-md:tracking-[0] max-md:text-center 
              max-md:bg-gradient-to-b max-md:from-[#10E0D7] max-md:to-[#01625E] max-md:bg-clip-text max-md:text-transparent"

          subtitle="Reduction in passenger wait times due to the implementation of G8WAY at airports."
        />
        <div className='flex justify-between max-lg:flex-col'>
          <StatsCard
            widthClass="w-[411px]"
            heightClass="h-[277px]"
            countUpFrom={0}
            countUpTo={90}
            countUpDuration={1}
            radicalBlur=" h-[335.03px] w-[179.96px]"
            widthDescription="w-[342px]"
            countUpClass='font-roboto font-bold text-[60px] leading-[66px] tracking-[0] text-center bg-linear-to-b from-[#10E0D7] to-[#01625E] bg-clip-text text-transparent'
            title="Passenger Satisfaction"
            subtitle="Satisfaction rate among passengers using G8WAY for navigation in airports."
          />
          <StatsCard
            widthClass="w-[411px]"
            heightClass="h-[277px]"
            countUpFrom={0}
            countUpTo={25}
            countUpDuration={1}
            radicalBlur=" h-[335.03px] w-[179.96px]"
            widthDescription="w-[342px]"
            countUpClass='font-roboto font-bold text-[60px] leading-[66px] tracking-[0] text-center bg-linear-to-b from-[#10E0D7] to-[#01625E] bg-clip-text text-transparent'
            title="Flow Capacity Boost"
            subtitle="Increase in passenger flow capacity achieved through the navigation app."
          />
        </div>

      </div>

    </div>
  )
}

export default PerformanceOverview





function StatsCard({
  widthClass,
  heightClass,
  countUpFrom = 0,
  countUpTo = 100,
  countUpDuration = 1,
  countUpSeparator = ",",
  radicalBlur = " h-[337.83px] w-[364.34px]",
  widthDescription,
  countUpClass = "font-roboto font-bold text-[80px] leading-[88px] tracking-[0] text-center bg-linear-to-b from-[#10E0D7] to-[#01625E] bg-clip-text text-transparent max-md:!text-[72px] max-md:!leading-[52px] ",
  title = "Wait Time Reduction",
  subtitle = "Reduction in passenger wait times due to the implementation of G8WAY at airports.",
}) {
  return (
    <div
      className={`relative font-roboto bg-linear-to-b overflow-hidden from-[#FFFFFF0D] to-[#FFFFFF00] border border-[#86868B33] rounded-2xl ${widthClass} ${heightClass} max-lg:min-w-full max-lg:max-w-full max-md:w-[91.47vw] max-md:max-h-[195px] my-shadow flex flex-col justify-center items-center mt-8`}
    >
      <div className={`absolute -top-24
               ${radicalBlur}
                bg-[radial-gradient(50.11%_54.04%_at_50%_50%,_#10E0D7_0%,_rgba(5,_12,_12,_0.1)_100%)] 
                blur-[100px]`}>
      </div>


      {/* CountUp Section */}
      <div className="mb-10 max-md:mb-3">
        <CountUp
          from={countUpFrom}
          to={countUpTo}
          separator={countUpSeparator}
          direction="up"
          duration={countUpDuration}
          className={countUpClass}
        />
      </div>

      {/* Title */}
      <p className="font-bold text-[#FFFFFF] text-[24px] leading-[36px] max-md:text-[20px] max-md:leading-[27px] max-md:tracking-[2%] tracking-[0%] mb-3 uppercase">
        {title}
      </p>

      {/* Subtitle */}
      <p className={`font-normal text-[#F0F0F0] text-[18px] leading-[26px]  max-md:text-[16px] max-md:leading-[24px] tracking-[0] text-center ${widthDescription} max-md:w-[90%]`}>
        {subtitle}
      </p>
    </div>
  );
}