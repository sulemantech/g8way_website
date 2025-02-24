import React from 'react'
import PerformanceOverview from './UI/PerformanceOverview';
import TravelInovation from './UI/TravelInovation';

function About() {
    return (
        <div className='bg-black py-10'>
            <p className="font-roboto text-white font-bold text-[46px] leading-[46px] tracking-[2%] text-center uppercase"
            >About <span className='text-[#10E0D7]'> G8WAY</span></p>
            <div className='flex space-x-10 justify-center py-10'>
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
            <div className='py-20 px-[72px] flex justify-between items-end'>
                <img className='w-[616px] h-[459px]' src="aboutaeroplane.png" alt="" />
                <div className=' flex flex-col space-y-3 items-start ml-3 justify-between w-[521px]'>
                    <p className='font-roboto text-white font-bold text-[46px] leading-[46px] tracking-[2%] text-center uppercase'>Business <span className='text-[#10E0D7]'> benefits </span></p>
                    <p className='font-normal text-[18px] text-[#f0f0f0] opacity-90 leading-[26px] tracking-[0]'>G8WAY provides a range of advantages for airports and airlines. By streamlining passenger flow, the app cuts down on wait times at security checkpoints and gates. Simultaneously, it boosts revenue with tailored offers and advertising chances for retailers. Airlines see gains in better capacity use and improved passenger communication.</p>
                </div>
            </div>
            <div className='py-20 px-[72px] flex justify-between items-end'>
                <div className=' flex flex-col space-y-3 items-start ml-3 justify-between w-[521px]'>
                    <p className='font-roboto text-white font-bold text-[46px] leading-[46px] tracking-[2%] text-center uppercase'><span className='text-[#10E0D7]'> Case </span> studies </p>
                    <p className='font-normal text-[18px] text-[#f0f0f0] opacity-90 leading-[26px] tracking-[0]'>The implementation of G8WAY at leading airports like Frankfurt has delivered impressive results. Passenger flow was managed more efficiently, wait times were significantly reduced, and traveler satisfaction increased. A detailed analysis highlights how our app optimizes processes while maximizing revenue potential.</p>
                </div>
                <img className='w-[616px] h-[459px]' src="aboutMuseum.png" alt="" />
            </div>
            <div><PerformanceOverview/></div>
            <div><TravelInovation/></div>
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