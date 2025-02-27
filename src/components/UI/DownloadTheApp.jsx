import React from 'react';

function DownloadTheApp({width="239px" ,className}) {
  return (
    <div className={`download-button ${className}`} style={{ width: `${width}` }}>
      <img src="DownloadBtnIcon.svg" alt="Download Icon" className="download-icon" />
      <p className="download-text">Download the App</p>
    </div>
  );
}

export default DownloadTheApp;
