import React from 'react'
import PerformanceOverview from './UI/PerformanceOverview';
import TravelInovation from './UI/TravelInovation';
import Dropdown from './UI/DropDown';

function About() {
    return (
        <div className='bg-[#050C0C] py-12 max-md:py-6'>
            <div className='w-[1296px] h-[514px]  mx-auto flex flex-col justify-between py-[80px] max-md:py-0 mb-14 max-[1300px]:h-auto max-[1300px]:w-full'>
                <p className="font-roboto text-white h-[46px] font-bold text-[46px] leading-[46px] tracking-[2%] text-center uppercase max-md:text-[32px] max-md:leading-[34px] max-md:my-4 max-[1300px]:my-4"
                >About <span className='text-[#10E0D7]'> G8WAY</span></p>
                <div className='flex flex-wrap justify-center gap-6 min-w-full 
                max-[1300px]:grid max-[1300px]:grid-cols-2 max-[1300px]:place-items-center
                max-[768px]:grid-cols-1 max-md:hidden'>
                    <Card
                        img={'abouttwo.svg'}
                        title={"Revolutionizing the travel experience"}
                        description={"G8WAY was founded to transform how people navigate airports and to make them smarter and more efficient. We aim to redefine the way passengers experience travel, ensuring simplicity and ease at every step."} />
                    <Card
                        img={'aboutthree.svg'}
                        title={"Innovative features tailored to your needs"}
                        description={"Our platform offers advanced tools such as indoor navigation, real-time flight data, and augmented reality, combining the power of modern technology with the practical needs of travelers."} />
                    <Card
                        img={'aboutone.svg'}
                        title={"Empowering airports and airlines"}
                        description={"G8WAY not only enhances passenger experiences but also optimizes operations for airports and airlines. By streamlining passenger flow and improving communication, we help partners become more efficient and attractive to travelers."} />
                </div>
                <div className='hidden max-md:flex flex-col justify-center  gap-6'>
                    <Dropdown
                        title="Revolutionizing the travel experience"
                        icon="abouttwo.svg"
                        imageSrc="abouttwomain.png"
                        text="G8WAY was founded to transform how people navigate airports and to make them smarter and more efficient. We aim to redefine the way passengers experience travel, ensuring simplicity and ease at every step."
                    />
                    <Dropdown
                        title="Innovative features tailored to your needs"
                        icon="aboutthree.svg"
                        imageSrc="aboutonemain.png"
                        text="Our platform offers advanced tools such as indoor navigation, real-time flight data, and augmented reality, combining the power of modern technology with the practical needs of travelers."
                        />
                    <Dropdown
                        icon="aboutone.svg"
                        title="Empowering airports and airlines"
                        imageSrc="aboutthreemain.png"
                        text="G8WAY not only enhances passenger experiences but also optimizes operations for airports and airlines. By streamlining passenger flow and improving communication, we help partners become more efficient and attractive to travelers."
                    />
                </div>
            </div>
            <div className='py-24 max-md:py-8 px-[72px] flex justify-between items-end max-lg:flex-col max-lg:space-y-4 max-md:space-y-0 max-lg:items-center max-md:flex-col-reverse'>
                <img className='w-[616px] h-[459px] max-md:mt-6 rounded-[20px] max-xl:scale-90 max-lg:scale-100 object-contain max-md:min-w-[91.47vw] max-md:h-[240px]' src="aboutaeroplane.png" alt="" />
                <div className=' flex flex-col space-y-3 items-start ml-3 justify-between w-[521px] max-md:w-[91.47vw] max-xl:scale-90 max-lg:scale-100 '>
                    <p className='font-roboto text-white font-bold text-[46px] leading-[46px] tracking-[2%] text-center uppercase max-md:text-[32px] max-md:leading-[34px]'>Business <span className='text-[#10E0D7]'> benefits </span></p>
                    <p className='font-normal font-roboto text-[16px] text-[#f0f0f0] opacity-90 leading-[26px]  max-md:leading-[20px] tracking-[0]'>G8WAY provides a range of advantages for airports and airlines. By streamlining passenger flow, the app cuts down on wait times at security checkpoints and gates. Simultaneously, it boosts revenue with tailored offers and advertising chances for retailers. Airlines see gains in better capacity use and improved passenger communication.</p>
                </div>
            </div>
            <div className='py-24 max-md:py-14 px-[72px] flex justify-between items-end max-lg:flex-col max-lg:space-y-4 max-lg:items-center max-md:space-y-0'>
                <div className=' flex flex-col space-y-3 items-start ml-3 justify-between w-[521px] max-md:w-[91.47vw] max-xl:scale-90 max-lg:scale-100'>
                    <p className='font-roboto text-white font-bold text-[46px] leading-[46px] tracking-[2%] max-md:text-[32px] max-md:leading-[34px] text-center uppercase'><span className='text-[#10E0D7]'> Case </span> studies </p>
                    <p className='font-normal font-roboto text-[16px] text-[#f0f0f0] opacity-90 leading-[26px] tracking-[0]  max-md:leading-[20px]'>The implementation of G8WAY at leading airports like Frankfurt has delivered impressive results. Passenger flow was managed more efficiently, wait times were significantly reduced, and traveler satisfaction increased. A detailed analysis highlights how our app optimizes processes while maximizing revenue potential.</p>
                </div>
                <img className='w-[616px] h-[459px] max-md:mt-6 rounded-[20px] max-xl:scale-90 max-lg:scale-100 object-contain max-md:min-w-[91.47vw] max-md:h-[240px]' src="aboutMuseum.png" alt="" />
            </div>
            <div className=''><PerformanceOverview /></div>
            <div><TravelInovation /></div>
        </div>
    )
}

export default About


function Card({ img, title, description }) {
    return (
        <>
            <div className=' font-roboto text-white max-w-[410px] max-h-[276px] border border-[#86868B33] rounded-2xl p-6 bg-linear-to-b from-[#FFFFFF0D] to-[#FFFFFF00] flex flex-col space-y-2.5'>
                <div className='flex items-center space-x-5 h-[70px]'>
                    <img className='w-[40px] aspect-square' src={img} alt="" />
                    <p className=" font-bold text-[24px] leading-[35px] tracking-[2%] uppercase"
                    >{title}</p>
                </div>
                <p className='font-normal text-[18px] leading-[26px] tracking-[0] text-[#f0f0f0] opacity-90'>{description}</p>
            </div>
        </>
    );
}