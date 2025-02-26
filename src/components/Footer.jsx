import React from 'react'

function Footer() {
    return (
        <div className='bg-black font-roboto h-[66px] flex justify-between px-[72px] items-center pb-3'>
            <div className="flex items-center ">
                <img
                    src="g8way.svg"
                    alt="Company Logo"
                    className="w-28 h-7"
                />
            </div>
            <div className='font-medium flex space-x-8 text-[14px] text-[#FFF] leading-[22px]  tracking-[0] opacity-60'>
                <p>Legal information</p>
                <p>Privacy Policy</p>
            </div>
            <div>
                <p className='font-normal text-[14px] text-[#F0F0F0] leading-[16.41px] tracking-[0] '>© 2025 G8WAY. All rights reserved</p>
            </div>

        </div>
    )
}

export default Footer
