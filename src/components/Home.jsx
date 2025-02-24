import React from 'react';
import Squares from './UI/Squares';
import Header from './UI/Header';
import TextAnimation from './UI/TextAnimation';
import Boximg from './UI/Boximg';
import DownloadTheApp from './UI/DownloadTheApp';

function Home({scrollToSection, refs}) {
    return (
        <div className="relative overflow-hidden font-roboto min-h-[960px]">
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
            <div className='absolute right-[132px] top-[136px] w-[413px] h-[332px] z-50'>
                <span className='flex space-x-[80px] justify-end'>
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
            <div className='absolute bottom-0 right-[72px] z-0'><img className='z-0' src="mobilehomescreen.png" alt="" /></div>
            <div className='absolute bottom-[68px] right-[72px]'>
                <span className='flex justify-end mr-14 mb-8'>
                    <Boximg HEIGHT="82px" WIDTH="82px" SRC="resturants.svg" Image="Restaurants" />
                </span>
                <TextAnimation Text="2" lines={["AIRPORT", "NAVI-APP"]} />
                <div className='float-right -mt-5'>
                <DownloadTheApp/>
                </div>
            </div>
                <span className='absolute bottom-28 left-36'>
                    <Boximg HEIGHT="99.51px" WIDTH="153.44px" SRC="Time.svg" Image="Time until flight" />
                </span>
        </div>
    );
}

export default Home;
