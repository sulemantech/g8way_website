import React from 'react'

function TravelInovation({scrollToSection , refs}) {
    return (
        <div className='min-h-[875px] max-md:min-h-fit max-md:py-16 font-roboto flex flex-col space-y-8 mt-8 justify-center max-md:w-[91.47vw] max-md:mx-auto items-center max-md:mt-10'>
            <div className='flex flex-col space-y-3 items-center max-md:w-[91.47vw] max-md:mx-auto'>
            <p className="font-bold text-white text-[46px] leading-[46px]  max-md:text-[32px] max-md:leading-[34px] max-md:text-left tracking-[2%] mb-3 uppercase text-center">
            Want to be part of <br /> the <span className='text-[#10E0D7]'> travel innovation</span>?
            </p>

            <p className={`font-normal text-[#F0F0F0] max-md:w-[91.47vw] max-md:mx-auto text-[18px] leading-[26px]  max-md:text-[16px] max-md:leading-[24px] max-md:text-left tracking-[0] text-center `}>
            G8WAY offers unique collaboration opportunities for travel industry partners. <br />Whether you’re an airport, airline, or retailer, we create synergies that benefit everyone involved.
            </p>
            </div>
            <div onClick={()=> scrollToSection(refs.contact)} className='w-[241px] h-[48px] max-md:min-w-[91.47vw] flex justify-center items-center rounded-full border border-[#10E0D7] font-medium text-[#10E0D7] default-hover:bg-[#10E0D7] transition-all duration-700 default-hover:text-[#050C0C]  text-[16px] leading-[18.75px] tracking-[0] text-center'>Join our partner network</div>
            <div>
                <img src="G8wayBottomLogo.png" alt="" />
            </div>

        </div>
    )
}

export default TravelInovation;
