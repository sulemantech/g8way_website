import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer';


function FeaturesAnimation() {
    const divRefs = useRef([]);
    const images = [
        "Firstscreen.svg",
        "secmobile.svg",
        "thirdmobile.svg",
        "fourthmobile.svg",
        "fifthmobile.svg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const options = { threshold: 0.5 };

    const { ref: ref1, inView: inView1 } = useInView(options);
    const { ref: ref2, inView: inView2 } = useInView(options);
    const { ref: ref3, inView: inView3 } = useInView(options);
    const { ref: ref4, inView: inView4 } = useInView(options);
    const { ref: ref5, inView: inView5 } = useInView(options);

    useEffect(() => {
        if (inView1) setCurrentIndex(0);
        if (inView2) setCurrentIndex(1);
        if (inView3) setCurrentIndex(2);
        if (inView4) setCurrentIndex(3);
        if (inView5) setCurrentIndex(4);
    }, [inView1, inView2, inView3, inView4, inView5]);


    return (
        <div className=''>
            <div className="relative w-full max-md:hidden flex  justify-center space-x-3   h-[500vh] ">

                {/* Left Scrollable Div */}
                <div className='flex relative flex-col z-10'>

                    <div ref={ref1} className="w-[30vw] h-[100vh]   flex items-center justify-center">
                        <TextComponent
                            text={["navigationIcon.svg",
                                "Indoor navigation system",
                                "Never get lost again! Using BLE beacons, G8WAY offers a highly precise indoor navigation system. Whether you're heading to a distant gate, a restaurant, or a duty-free shop, the app guides you in real-time. It also considers accessibility options like elevators and escalators to ensure an optimal navigation experience for all travelers.", "1/5"]} />                    </div>
                    <div className="w-[30vw] h-[100vh] ">
                        <img className='object-cover min-h-[783px] overflow-visible' src="bgMobile.png" alt="" />
                    </div>
                    <div ref={ref3} className="w-[30vw] h-[100vh]   flex items-center justify-center">
                        <TextComponent
                            text={["thirdico.svg",
                                "Augmented reality (AR)",
                                "Navigate airports like never before! With our augmented reality feature, you can see visual cues directly on your smartphone screen. AR guides you to your destination, informs you about security checkpoint wait times, and makes it easier to locate points of interest.", "3/5"]} />                    </div>
                    <div className="w-[30vw] h-[100vh] ">
                        <img className='object-cover min-h-[783px] overflow-visible' src="bgMobile.png" alt="" />
                    </div>
                    <div ref={ref5} className="w-[30vw] h-[100vh]   flex items-center justify-center">
                        <TextComponent
                            text={["fifthico.svg",
                                "Integrated Affiliate Program",
                                "Benefit from our partnerships! Collaborating with airport retailers and food outlets, G8WAY offers exclusive discounts and special deals. Our partners enjoy increased visibility and revenue, creating a win-win situation.", "5/5"]} />
                    </div>


                </div>

                {/* <img className='' src="bgMobile.png" alt="" />
                    <img className='' src="bgMobile.png" alt="" /> */}


                <div className="w-[30vw] h-[90vh]  2xl:min-w-[501.09px] sticky top-0 flex items-center justify-center">
                    <div className="relative flex justify-center">
                        <img
                            className="w-full h-full max-h-[70vh] mt-12 object-cover"
                            src={images[currentIndex]}
                            alt="Sliding Image"
                        />
                    </div>
                </div>


                <div className='flex flex-col z-10'>
                    <div className="w-[30vw] h-[100vh]">
                        <img className='object-cover min-h-[783px] overflow-visible' src="bgMobile.png" alt="" />
                    </div>

                    <div ref={ref2} className="w-[30vw] h-[100vh]   flex items-center justify-center">
                        <TextComponent
                            text={["secico.svg",
                                "Real-time flight data",
                                "Stay informed at all times! G8WAY connects directly to airport databases to provide the most up-to-date information about your flight. From gate changes and delays to boarding times, G8WAY keeps you ahead. Push notifications ensure you’re always in the loop.",
                                "2/5"]} />                    </div>
                    <div className="w-[30vw] h-[100vh]">
                        <img className='object-cover min-h-[783px] overflow-visible' src="bgMobile.png" alt="" />
                    </div>

                    <div ref={ref4} className="w-[30vw] h-[100vh]   flex items-center justify-center">
                        <TextComponent
                            text={["fourthico.svg",
                                "Personalization",
                                "Your experience, your preferences! G8WAY adapts to your profile, suggesting shops, restaurants, and services that match your interests. Based on your travel history and preferences, the app provides tailored recommendations to enhance your airport experience.", "4/5"]} />
                    </div>
                    <div className="w-[30vw] h-[100vh]">
                        <img className='object-cover min-h-[783px] overflow-visible' src="bgMobile.png" alt="" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default FeaturesAnimation



const TextComponent = ({ text }) => {
    return (
        <>
            <div className='min-h-fit md:w-[28.54vw] max-w-[411px] flex flex-col overflow-hidden  border border-[#86868B33] rounded-2xl p-5 bg-linear-to-b from-[#FFFFFF0D] to-[#FFFFFF00]'>
                <div className=' font-roboto  flex flex-col overflow-hidden'>
                    <img className='w-[40px] aspect-square mb-[4vh]' src={text[0]} alt="Icon" />
                    <p className='font-bold text-[24px] leading-[32px] text-[#FFFFFF] tracking-[2%] uppercase mb-2'>{text[1]}</p>
                    <p className='font-normal text-[18px] leading-[26px] tracking-[0%] text-[#F0F0F0] opacity-90'>{text[2]}</p>
                </div>
                <p className='font-normal text-[16px] text-[#F0F0F0] leading-[24px] tracking-[0%] uppercase mt-[10vh] '>
                    {text[3]}
                </p>
            </div>
        </>
    )
}