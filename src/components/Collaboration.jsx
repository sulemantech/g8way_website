import React from 'react'
import Squares from './UI/Squares'
import DownloadTheApp from './UI/DownloadTheApp';

function Collaboration() {
    return (
        <>
            <div>
                <div className='flex flex-col space-y-3 h-[592px] font-roboto items-center justify-center relative'>
                    <Squares
                        squareSize={90}
                        borderColor="#0c1f1f"
                        bgColor='#000'
                        opacity={"opacity-60"}
                        className="absolute inset-0 -z-10"
                    />
                    <p className="font-bold text-white text-[46px] leading-[46px] tracking-[2%] mb-3 uppercase text-center">
                        Interested in  <span className='text-[#10E0D7]'> collaborating </span> <br /> or <span className='text-[#10E0D7]'> learning more</span>?
                    </p>

                    <p className={`font-normal opacity-90 mb-7 text-white text-[18px] leading-[26px] tracking-[0] text-center w-[843px] max-lg:max-w-[100vw]`}>
                        Reach out to us through our user-friendly contact form. Our team looks forward to working <br /> with you and creating innovative solutions.
                    </p>
                    <div className='w-[632px]'>
                        <div className='flex space-x-3 mb-5'>
                            <InputField PlaceHolder={"First name"} />
                            <InputField PlaceHolder={"Last name"} />
                        </div>
                        <div className='mb-3'>
                            <InputField PlaceHolder={"Email"} />
                        </div>
                        <button className='w-full h-[48px] rounded-full mt-5 text-center bg-[#10E0D7] font-bold'>Submit</button>
                        <p className='opacity-80 mt-4 text-[#f0f0f0] text-[12px] font-roboto font-normal leading-[16px] text-center'>By submitting this form, you agree to receive updates and marketing communications from G8WAY. To learn more about how we handle and protect your personal data, please review our <span className='underline'>Privacy Policy</span>.</p>

                    </div>

                </div>

            </div>
            <div className='h-[844px] font-roboto flex items-center justify-center space-x-8 bg-black max-md:flex-col max-md:h-auto'>
                <div className='w-[632px] h-[684px] max-[1300px]:w-[45vw] relative flex flex-col space-y-3 items-center justify-center rounded-2xl border border-[#86868B33] bg-linear-to-b from-[#FFFFFF0D] to-[#FFFFFF00] max-md:w-[96%]'>
                    <p className="font-bold text-white text-[35px] w-[552px] max-lg:max-w-[100%] max-lg:scale-95 text-left leading-[35px] tracking-[2%] mb-3 uppercase max-[1300px]:scale-75">
                        <span className='text-[#10E0D7] '> Discover </span>  seamless <br /> airport navigation <span className='text-[#10E0D7]'> today </span>
                    </p>
                    <p className={`font-normal w-[552px] max-lg:max-w-[100%] max-lg:scale-95 text-left opacity-90 mb-7 text-white text-[18px] leading-[26px] tracking-[0] max-[1300px]:scale-75`}>
                        Ready to enhance your travel experience? Download the G8WAY app now and explore effortless airport navigation, real-time flight updates, and personalized recommendations. Your journey just got smarter.
                    </p>
                    <div className='w-[552px] mt-7 max-[1300px]:scale-75 max-lg:max-w-[100%] max-lg:scale-95'>
                        <DownloadTheApp/>
                    </div>
                    <div className='absolute bottom-5 right-8 max-[1300px]:scale-75 max-lg:bottom-1 max-lg:right-1'>
                        <img src="QrcodeG8.svg" alt="" />
                    </div>
                </div>
                <div className='w-[632px] h-[684px] max-[1300px]:w-[45vw] rounded-2xl border border-[#86868B33] bg-linear-to-b from-[#FFFFFF0D] to-[#FFFFFF00] max-md:w-[96%]'>
                    <img className='ml-16 mt-5 max-[1300px]:scale-75' src="g8mobileinhand.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Collaboration


function InputField({ PlaceHolder }) {
    return (
        <div className="w-full">
            <div className="relative w-full font-roboto text-white font-normal text-[16px] leading-[24px] tracking-[0%] text-center ">
                <input
                    className="peer w-full h-[48px] bg-transparent placeholder:text-[#fff] text-[#fff] text-sm border border-[#FFFFFF1A] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-[#FFFFFF1A] hover:border-[#FFFFFF1A] shadow-sm focus:shadow"
                />
                <label className="absolute opacity-90 cursor-text px-1 left-2.5 top-4 text-sm transition-all transform origin-left peer-focus:top-0.5 peer-focus:left-2.5 peer-focus:text-xs peer-focus:scale-90">
                    {PlaceHolder}
                </label>
            </div>
        </div>
    );
}
