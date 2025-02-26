import React from 'react'

function TravelInovation() {
    return (
        <div className='min-h-[875px] flex flex-col space-y-8 mt-8 justify-center items-center'>
            <div className='flex flex-col space-y-3 items-center'>
            <p className="font-bold text-white text-[46px] leading-[46px] tracking-[2%] mb-3 uppercase text-center">
            Want to be part of <br /> the <span className='text-[#10E0D7]'> travel innovation</span>?
            </p>

            <p className={`font-normal text-[#86868b] text-[18px] leading-[26px] tracking-[0] text-center w-[843px] max-lg:max-w-[100vw]`}>
            G8WAY offers unique collaboration opportunities for travel industry partners. <br />Whether you’re an airport, airline, or retailer, we create synergies that benefit everyone involved.
            </p>
            </div>
            <div className='w-[241px] h-[48px] flex justify-center items-center rounded-full border border-[#10E0D7] font-medium text-[#10E0D7] text-[16px] leading-[18.75px] tracking-[0] text-center'>Join our partner network</div>
            <div>
                <img src="G8wayBottomLogo.png" alt="" />
            </div>

        </div>
    )
}

export default TravelInovation
