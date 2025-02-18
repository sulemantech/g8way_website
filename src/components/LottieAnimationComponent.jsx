import React from 'react'
import Lottie from 'react-lottie'
import animationdata from '../assets/navigreendot.json'

function LottieAnimationComponent() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationdata,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className='h-[619px] bg-black flex justify-between items-end w-full px-10 font-roboto pb-3'>
            <div className='w-[606px] h-[459px] rounded-3xl overflow-hidden'>
                <Lottie
                    options={defaultOptions}
                />
            </div>
            <div className='max-w-[521px]'>
                <p className='font-bold text-[35px] leading-[35px] tracking-[2%] text-white text-left uppercase'>Empowering <span className='text-[#10E0D7]'>airports <br /> </span> and  <span className='text-[#10E0D7]'>airlines</span></p>
                <p className=' text-left font-normal text-[18px] leading-[26px] tracking-[0%] text-[#F0F0F0]'>G8WAY not only enhances passenger experiences but also optimizes operations for airports and airlines. By streamlining passenger flow and improving communication, </p>
            </div>
        </div>
    );
}

export default LottieAnimationComponent
