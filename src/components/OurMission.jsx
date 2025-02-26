import React from 'react'

function OurMission() {
    return (
        <div className='bg-[#10E0D7] font-roboto flex justify-center items-center min-h-[453px] 2xl:px-12 max-md:py-[45px]'>
            <div className='flex justify-between items-start w-[1296px] 2xl:w-[90%] space-x-[32px] max-[1300px]:scale-90 max-[1200px]:scale-[0.8] max-lg:flex-col max-lg:w-full max-lg:h-auto max-lg:space-y-7 max-lg:justify-center max-lg:items-center max-md:scale-100'>
                <div className=' flex flex-col space-y-3 w-[411px] max-lg:w-[80%] max-md:w-[94%] max-md:mx-auto'>
                    <p className='font-bold text-[46px] leading-[46px] tracking-[2%] uppercase'>Our mission </p>
                    <p className='font-normal text-[18px] leading-[26px] tracking-[0%]'>Combining cutting-edge technology with user-friendly design, we assist you at every step of your journey. </p>
                    <button className='w-[146px] h-[48px] gap-[8px] rounded-full bg-black text-[#10E0D7] mt-5 default-hover:bg-[#94F2ED] default-hover:text-black transition-all duration-700'>Learn more</button>
                </div>
                <div className='min-w-[410px] min-h-[293px] max-lg:w-[80%] max-md:w-[94%] max-md:mx-auto'><img className='w-full max-lg:w-[80%] max-md:w-[100%] max-md:mx-auto' src="map.svg" alt="" />
                </div>
                <div className='flex flex-col space-y-3 w-[411px] h-[287px] max-lg:w-[80%] max-md:w-[94%] max-md:mx-auto'>
                    <p className='font-bold text-[24px] leading-[35px] tracking-[2%] uppercase'>not only indoor navigator</p>
                    <p className='font-normal text-[18px] leading-[26px] tracking-[0]'>Our goal is to make every step in the airport simple and intuitive, so you can focus on what truly matters—your dreams and adventures.</p>
                    <div className='w-[411px] h-[134px] max-lg:w-[80%] bg-black rounded-2xl text-white flex flex-col space-y-1 justify-center p-[24px] mt-3'>
                        <p className='font-normal text-[18px] leading-[26px] tracking-normal'>Say “hello” to seamless adventures. <br /> Get ready to fly smarter and live bolder!</p>
                        <p className='font-normal text-[18px] leading-[26px] tracking-[0] mt-1'>- Marlon Diebold, Founder & CEO</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMission
