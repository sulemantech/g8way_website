import React from 'react'

function OurMission() {
    return (
        <div className='bg-[#10E0D7] font-roboto flex justify-between items-center space-x-[32px] min-h-[453px] px-8'>
            <div className=' flex flex-col space-y-3'>
                <p className='font-bold text-[46px] leading-[46px] tracking-[2%] uppercase'>Our mission </p>
                <p className='font-normal text-[18px] leading-[26px] tracking-[0%]'>Combining cutting-edge technology with user-friendly design, we assist you at every step of your journey. </p>
                <button className='w-[146px] h-[48px] gap-[8px] rounded-full bg-black text-[#10E0D7] mt-5 default-hover:bg-[#94F2ED] default-hover:text-black transition-all duration-700'>Learn more</button></div>
            <div className='min-w-[410px] min-h-[293px]'><img className='w-full' src="map.svg" alt="" /></div>
            <div>
                <p className='font-bold text-[24px] leading-[35px] tracking-[2%] uppercase'>not only indoor navigator</p>
                <p className='font-normal text-[18px] leading-[26px] tracking-[0]'>Our goal is to make every step in the airport simple and intuitive, so you can focus on what truly matters—your dreams and adventures.</p>
                <div className='w-[411px] h-[134px] bg-black rounded-2xl text-white flex flex-col space-y-1 justify-center p-[24px]'>
                    <p className='font-normal text-[18px] leading-[26px] tracking-normal'>Say “hello” to seamless adventures. <br /> Get ready to fly smarter and live bolder!</p>
                    <p className='font-normal text-[18px] leading-[26px] tracking-[0] mt-1'>- Marlon Diebold, Founder & CEO</p>
                </div>
            </div>
        </div>
    )
}

export default OurMission
