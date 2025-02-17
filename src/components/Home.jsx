import React from 'react';
import Squares from './UI/Squares';
import Header from './UI/Header';
import TextAnimation from './UI/TextAnimation';
import Boximg from './UI/Boximg';

function Home() {
    return (
        <div className="relative overflow-hidden font-roboto min-h-[960px]">
            {/* Background Squares with lower z-index */}
            <Squares
                squareSize={90}
                borderColor="#0c1f1f"
                bgColor='#071010'
                className="absolute inset-0 -z-10 opacity-50"
            />

            {/* Foreground components */}
            <Header />
            <TextAnimation />
            <div className='absolute right-[132px] top-[136px]'>
            <Boximg HEIGHT="80px" WIDTH="80px" SRC="lounge.svg" Image="Lounge" />
            </div>
            <div className='absolute bottom-6 left-[140px] z-0'><img className='z-0' src="mobilehomescreen.png" alt="" /></div>
            <div className='absolute bottom-28 right-5'>
            <TextAnimation Text="2" lines={["AIRPORT", "NAVI-APP"]}/>
            </div>
        </div>
    );
}

export default Home;
