import React from 'react';
import Squares from './UI/Squares';
import Header from './UI/Header';
import TextAnimation from './UI/TextAnimation';
import Boximg from './UI/Boximg';
import DownloadTheApp from './UI/DownloadTheApp';
import BoximgComponent from './UI/BoximgComponent';

function Home({ scrollToSection, refs }) {
    return (
        <div className="relative overflow-hidden font-roboto min-h-[960px] max-md:min-h-[1015px]">
            {/* Background Squares with lower z-index */}
            <Squares
                squareSize={90}
                borderColor="#0c1f1f"
                bgColor='#071010'
                opacity={"opacity-70"}
                className="absolute inset-0 -z-10"
            />

            {/* Foreground components */}
            <Header scrollToSection={scrollToSection} refs={refs} />
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
            <div className="absolute bottom-0 right-[72px] max-md:right-0 max-sm:right-28 max-lg:bottom-32 max-md:bottom-[39%] z-0  w-screen">
                <img
                    className="z-0 min-w-[700px] min-h-[283px] object-cover"
                    src="mobilehomescreen.png"
                    alt=""
                />
            </div>

            <div className='absolute bottom-[68px] max-md:bottom-4 right-[72px] max-md:right-7 max-sm:right-3'>
                <span className='flex justify-end mr-14 mb-8 max-md:hidden'>
                    <Boximg HEIGHT="82px" WIDTH="82px" SRC="resturants.svg" Image="Restaurants" />
                </span>
                <TextAnimation Text="2" lines={["AIRPORT", "NAVI-APP"]} />
                <div className='float-right -mt-5 max-sm:opacity-0 max-sm:pointer-events-none'>
                    <DownloadTheApp />
                </div>

            </div>
            <div className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 sm:hidden">
                <DownloadTheApp width="96vw" />
            </div>

            <span className='absolute bottom-28 left-36 max-lg:scale-75 max-lg:left-8 max-md:bottom-[43.5%] max-md:left-2'>
                <Boximg HEIGHT="99.51px" WIDTH="153.44px" SRC="Time.svg" Image="Time until flight" />
            </span>
        </div>
    );
}

export default Home;
