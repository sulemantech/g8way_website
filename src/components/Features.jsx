import React from 'react'
import Squares from './UI/Squares'

function Features() {
    return (
        <div className='pt-14  w-[1296px] max-[1297px]:w-fit mx-auto'>
            <p className='font-bold font-roboto text-[46px] text-white leading-[46px] max-md:text-[32px] max-md:leading-[34px] tracking-[2%] text-center uppercase'><span className='text-[#10E0D7]'>5 features</span> to transform <br /> your airport <span className='text-[#10E0D7]'> experience</span></p>
            <MobileWithText
                text={["navigationIcon.svg",
                    "Indoor navigation system",
                    "Never get lost again! Using BLE beacons, G8WAY offers a highly precise indoor navigation system. Whether you're heading to a distant gate, a restaurant, or a duty-free shop, the app guides you in real-time. It also considers accessibility options like elevators and escalators to ensure an optimal navigation experience for all travelers.", "1/5"]}
                flexStyle={"space-x-[86px] max-lg:space-x-[30px] max-md:space-x-[0px] max-md:flex-col"}
                screen="Firstscreen.svg"
            />
            <MobileWithText
                text={["secico.svg",
                    "Real-time flight data",
                    "Stay informed at all times! G8WAY connects directly to airport databases to provide the most up-to-date information about your flight. From gate changes and delays to boarding times, G8WAY keeps you ahead. Push notifications ensure you’re always in the loop.",
                    "2/5"]}
                screen="secmobile.svg"
                flexStyle={"flex-row-reverse space-x-0  max-lg:space-x-[30px] max-md:space-x-[0px] max-md:flex-col"}
                FloatingMobile={"float-end mr-[86px] max-lg:mr-[30px] max-md:float-none max-md:mr-[0px]"}
            />
            <MobileWithText
                text={["thirdico.svg",
                    "Augmented reality (AR)",
                    "Navigate airports like never before! With our augmented reality feature, you can see visual cues directly on your smartphone screen. AR guides you to your destination, informs you about security checkpoint wait times, and makes it easier to locate points of interest.", "3/5"]}
                screen="thirdmobile.svg"
                flexStyle={"space-x-[86px] max-lg:space-x-[30px]  max-lg:space-x-[30px] max-md:space-x-[0px] max-md:flex-col"}
            />
            <MobileWithText
                text={["fourthico.svg",
                    "Personalization",
                    "Your experience, your preferences! G8WAY adapts to your profile, suggesting shops, restaurants, and services that match your interests. Based on your travel history and preferences, the app provides tailored recommendations to enhance your airport experience.", "4/5"]}
                screen="fourthmobile.svg"
                flexStyle={"flex-row-reverse space-x-0  max-lg:space-x-[30px] max-md:space-x-[0px] max-md:flex-col"}
                FloatingMobile={"float-end mr-[86px] max-lg:mr-[30px] max-md:float-none max-md:mr-[0px]"}
            />
            <MobileWithText
                text={["fifthico.svg",
                    "Integrated Affiliate Program",
                    "Benefit from our partnerships! Collaborating with airport retailers and food outlets, G8WAY offers exclusive discounts and special deals. Our partners enjoy increased visibility and revenue, creating a win-win situation.", "5/5"]}
                screen="fifthmobile.svg"
                flexStyle={"space-x-[86px] max-lg:space-x-[30px]  max-lg:space-x-[30px] max-md:space-x-[0px] max-md:flex-col"}
            />
        </div>
    )
}

export default Features


function MobileWithText({ text, screen, flexStyle, FloatingMobile }) {
    return (
        <div className={`min-h-[960px] max-md:min-h-[870px] flex  ${flexStyle} text-white  items-center justify-between`}>
            {/* Left Card */}
            <div className='h-[522px] max-md:h-[393px] max-md:p-4 relative max-md:min-h-[393px] max-md:min-w-full border border-[#86868B33] rounded-2xl p-6 bg-linear-to-b from-[#FFFFFF0D] to-[#FFFFFF00]'>
                <div className='max-w-[363px] max-h-[321px] flex flex-col'>
                    <img className='w-[40px] max-md:w-[32px] aspect-square mb-8' src={text[0]} alt="Icon" />
                    <p className='font-bold text-[24px] leading-[32px] max-md:text-[20px] max-md:leading-[27px] tracking-[2%] uppercase mb-4'>{text[1]}</p>
                    <p className='font-normal text-[18px] leading-[26px] max-md:text-[16px] max-md:leading-[24px] tracking-[0%] text-[#F0F0F0] opacity-90'>{text[2]}</p>
                </div>
                <p className='font-normal text-[16px] leading-[24px] tracking-[0%] uppercase absolute bottom-6 left-8'>
                    {text[3]}
                </p>
            </div>
            <div className=' w-full max-md:min-h-fit max-md:my-12 max-h-[614px] max-md:max-h-[429px] bg-[url(bgMobile.svg)] bg-[50%_70%] max-md:flex max-md:justify-center max-md:items-center'>
                <img className={`${FloatingMobile}`} src={screen} alt="Screen" />
            </div>
        </div>
    );
}
