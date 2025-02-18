import React from 'react';

function DownloadTheApp() {
    return (
        <div className="w-[239px] h-[65px] gap-2 cursor-pointer rounded-full px-[32px] py-[22px] hover:bg-black flex items-center space-x-2 bg-[#10E0D7] transition-all duration-300 hover:flex-row-reverse">
            <img src="DownloadBtnIcon.svg" alt="Download Icon" className="transition-all duration-300" />
            <p className="transition-all duration-300">Download the App</p>
        </div>
    );
}

export default DownloadTheApp;
