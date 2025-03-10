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


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Get how much of Home section is visible
                const visiblePercentage = entry.intersectionRatio * 100;
                setShowHeader(visiblePercentage > 10); // Show header if at least 20% is visible
            },
            { root: null, threshold: [0.1, 0.8] } // Detect when 20% or 80% is visible
        );

        if (homeRef.current) {
            observer.observe(homeRef.current);
        }

        return () => {
            if (homeRef.current) {
                observer.unobserve(homeRef.current);
            }
        };
    }, []);

    return (
        <div ref={homeRef} className="relative overflow-hidden font-roboto min-h-[960px] max-md:min-h-[1015px]">

            <TextAnimation />

            <div className='absolute lg:right-[132px] max-lg:right-2 max-lg:scale-75 max-lg:top-56 lg:top-[136px] w-[413px] h-[332px] z-40 max-md:top-[50%] max-md:hidden'>
                <span className='flex space-x-[80px] justify-end max-sm:justify-around'>
                    <Boximg HEIGHT="82px" WIDTH="82px" SRC="Shops.svg" Image="Shops" />
                    <Boximg HEIGHT="82px" WIDTH="82px" SRC="lounge.svg" Image="Lounge" />
                </span>
                <Boximg HEIGHT="82px" WIDTH="82px" SRC="gates.svg" Image="Gates" />
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
            <div className="absolute bottom-0 left-[140px] max-sm:-left-32 max-sm:scale-[0.8] max-sm:top-[220px] max-md:left-0 max-md:!right-0 max-sm:right-28 max-lg:bottom-32 max-md:bottom-[39%] z-0  w-screen">
                <img
                    className="z-0 min-w-[700px] min-h-[283px] object-cover"
                    src="mobilehomescreen.png"
                    alt=""
                />
            </div>
            <div className="absolute w-full h-[80.15px] top-[480.57px] left-0 bg-gradient-to-t from-[#050C0C] via-[#050C0C26] to-transparent md:hidden"></div>


            <div className='absolute bottom-[68px] max-md:bottom-14 right-[72px] max-md:right-7 max-sm:right-3'>
                <span className='flex justify-end mr-14 mb-8 max-md:hidden'>
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

            <span className='absolute bottom-28 left-36 max-lg:scale-75 max-lg:left-8 max-md:bottom-[48%] max-md:left-[18px] max-md:scale-100'>
                <Boximg HEIGHT="99.51px" WIDTH="153.44px" className="max-md:!h-[64px] max-md:!w-[113px]" SRC="Time.svg" Image="Time until flight" />
            </span>
        </div>
    );
}

export default Home;
