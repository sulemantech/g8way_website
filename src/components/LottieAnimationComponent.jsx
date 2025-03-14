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
        <div className='h-[619px] bg-[#050C0C] flex justify-between items-end max-lg:flex-col max-lg:space-y-4 max-lg:items-center w-full px-[72px] font-roboto py-20 max-md:py-10 max-lg:h-full max-lg:px-0'>
            <div className='w-[606.62px] h-[459px] rounded-3xl overflow-hidden max-[1300px]:w-[450px] max-[1300px]:h-[400px] max-lg:w-[91.47%] max-lg: max-[1030px]:mr-3 max-md:mr-0'>
                <Lottie
                    options={defaultOptions}
                />
            </div>
            <div className='w-[521px] min-h-[156px] max-[1300px]:w-[420px] max-lg:w-[91.47%] max-lg:h-full'>
                <p className='font-bold text-[35px] leading-[35px] tracking-[2%] max-md:text-[32px] max-md:leading-[36px] text-white text-left uppercase mb-2.5'>Empowering <span className='text-[#10E0D7]'>airports <br /> </span> and  <span className='text-[#10E0D7]'>airlines</span></p>
                <p className=' text-left font-normal text-[18px] leading-[26px] max-md:text-[16px] tracking-[0%] text-[#F0F0F0] opacity-90'>G8WAY not only enhances passenger experiences but also optimizes operations for airports and airlines. By streamlining passenger flow and improving communication, </p>
            </div>
        </div>
    );
}

export default LottieAnimationComponent
