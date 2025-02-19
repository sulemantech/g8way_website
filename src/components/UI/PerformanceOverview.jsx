import React from 'react'
import CountUp from './CountUp'

function PerformanceOverview() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='font-roboto text-white font-bold text-[46px] leading-[46px] tracking-[2%] text-center uppercase'><span className='text-[#10E0D7]'> G8WAY </span> Performance <span className='text-[#10E0D7]'> Overview </span>  </p>
      <StatsCard
        widthClass="w-[854px]"
        heightClass="h-[303px]"
        countUpFrom={0}
        countUpTo={100}
        widthDescription="w-[500px]"
        countUpDuration={1}
        title="Wait Time Reduction"
        subtitle="Reduction in passenger wait times due to the implementation of G8WAY at airports."
      />
      <div className='flex space-x-10'>
        <StatsCard
          widthClass="w-[411px]"
          heightClass="h-[277px]"
          countUpFrom={0}
          countUpTo={100}
          countUpDuration={1}
          radicalBlur=" h-[335.83px] w-[179.34px]"
          widthDescription="w-[342px]"
           countUpClass='font-roboto font-bold text-[60px] leading-[66px] tracking-[0] text-center bg-linear-to-b from-[#10E0D7] to-[#01625E] bg-clip-text text-transparent'
          title="Passenger Satisfaction"
          subtitle="Satisfaction rate among passengers using G8WAY for navigation in airports."
        />
        <StatsCard
          widthClass="w-[411px]"
          heightClass="h-[277px]"
          countUpFrom={0}
          countUpTo={100}
          countUpDuration={1}
          radicalBlur=" h-[335.83px] w-[179.34px]"
          widthDescription="w-[342px]"
          countUpClass='font-roboto font-bold text-[60px] leading-[66px] tracking-[0] text-center bg-linear-to-b from-[#10E0D7] to-[#01625E] bg-clip-text text-transparent'
          title="Flow Capacity Boost"
          subtitle="Increase in passenger flow capacity achieved through the navigation app."
        />

      </div>

    </div>
  )
}

export default PerformanceOverview





function StatsCard({
  widthClass = "w-[854px]",
  heightClass = "h-[303px]",
  countUpFrom = 0,
  countUpTo = 100,
  countUpDuration = 1,
  countUpSeparator = ",",
  radicalBlur = " h-[337.83px] w-[364.34px]",
  widthDescription,
  countUpClass = "font-roboto font-bold text-[80px] leading-[88px] tracking-[0] text-center bg-linear-to-b from-[#10E0D7] to-[#01625E] bg-clip-text text-transparent",
  title = "Wait Time Reduction",
  subtitle = "Reduction in passenger wait times due to the implementation of G8WAY at airports.",
}) {
  return (
    <div
      className={`relative font-roboto bg-linear-to-b overflow-hidden from-[#FFFFFF0D] to-[#FFFFFF00] border border-[#86868B33] rounded-2xl ${widthClass} ${heightClass} my-shadow flex flex-col justify-center items-center mt-8`}
    >
      {/* Background Radial Blur */}
      <div className={`bg-radial from-[#10E0D7] to-[#050C0C1A] blur-[200px] ${radicalBlur}  absolute`}></div>

      {/* CountUp Section */}
      <div className="mb-10">
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
      <p className="font-bold text-white text-[24px] leading-[36px] tracking-[0%] mb-3 uppercase">
        {title}
      </p>

      {/* Subtitle */}
      <p className={`font-normal text-white text-[18px] leading-[26px] tracking-[0] text-center ${widthDescription}`}>
        {subtitle}
      </p>
    </div>
  );
}