import React, { useEffect, useRef, useState } from 'react';
import Squares from './UI/Squares';
import Header from './UI/Header';
import TextAnimation from './UI/TextAnimation';
import Boximg from './UI/Boximg';
import DownloadTheApp from './UI/DownloadTheApp';
import BoximgComponent from './UI/BoximgComponent';

function Home({ scrollToSection, refs }) {
    const homeRef = useRef(null);
    const [isSticky, setIsSticky] = useState(true);
    const [showHeader, setShowHeader] = useState(true);


    return (
        <div ref={homeRef} className="relative overflow-hidden  font-roboto min-h-[850px] max-md:min-h-[892px]">

            <TextAnimation />

            <div className='absolute lg:right-[144px]  max-lg:right-2 max-lg:scale-75 max-lg:top-56 lg:top-[25px] w-[413px] h-[332px] z-40 max-md:top-[50%] max-md:hidden'>
                <span className='flex space-x-[80px] justify-end max-sm:justify-around'>
                    <Boximg HEIGHT="82px" WIDTH="82px" SRC="Shops.svg" Image="Shops" />
                    <div className='w-fit h-fit bg-[url(/gatesbg.png)] bg-right-top bg-no-repeat'>
                        <Boximg HEIGHT="82px" WIDTH="82px" SRC="lounge.svg" Image="Lounge" />
                    </div>
                </span>
                <div className='w-fit h-fit bg-[url(/gatesbg.png)] bg-right-top bg-no-repeat'>
                    <Boximg HEIGHT="82px" WIDTH="82px" SRC="gates.svg" Image="Gates" />
                </div>
                <span className='flex space-x-[80px] justify-end'>
                    <Boximg HEIGHT="80px" WIDTH="80px" SRC="Upload.svg" Image={"Upload \n Tickets"} />
                    <Boximg
                        HEIGHT="161px"
                        WIDTH="169px"
                        SRC="Navigation.svg"
                        Image={"Indoor navi with fast \n route to destination"}
                        Arrow={true}
                    />

                </span>
            </div>
            <div className='md:hidden '>
                <BoximgComponent />
            </div>
            <div className="absolute bottom-0 max-md:hidden left-[140px] max-lg:bottom-32 z-0">
                <img
                    className="z-0 min-w-[700px] min-h-[283px] max-h-[825px]  object-cover"
                    src="mobilehomescreen.png"
                    alt=""
                />
            </div>
           
            {/* <div className="absolute w-full h-[80.15px] top-[380.57px] left-0 bg-gradient-to-t from-[#050C0C] via-[#050C0C26] to-transparent md:hidden"></div> */}


            <div className='absolute bottom-[68px] max-md:bottom-14 right-[80px] max-md:right-7 max-sm:right-3'>
                <span className='flex justify-end mr-14 mb-8 max-md:hidden  bg-[url(/gatesbg.png)] bg-right-top bg-no-repeat'>
                    <Boximg HEIGHT="82px" WIDTH="82px" SRC="resturants.svg" Image="Restaurants" />
                </span>
                <TextAnimation Text="2" lines={["AIRPORT", "NAVI-APP"]} />
                <div className='float-right -mt-5 max-sm:opacity-0 max-sm:pointer-events-none'>
                    <DownloadTheApp />
                </div>

            </div>
            <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 sm:hidden">
                <DownloadTheApp width="91.47vw" className={"max-md:!h-[56px]"} />
            </div>

            <span className='absolute bottom-28 left-36 max-lg:scale-75 max-lg:left-8 max-md:bottom-[56%] max-md:left-[18px] max-md:scale-100'>
                <Boximg HEIGHT="99.51px" WIDTH="153.44px" className="max-md:!h-[64px] max-md:!w-[113px]" SRC="Time.svg" Image="Time until flight" />
            </span>
        </div>
    );
}

export default Home;
