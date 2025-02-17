import React from 'react';

function Boximg({ Image, SRC, WIDTH, HEIGHT }) {
  return (
    <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        borderBottomWidth: '0.82px',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 105.05%)',
        boxShadow: '0px 0px 0px 0px #FFFFFF80 inset, 0px -2px 40px 0px #10E0D726, 0px -2px 10px 0px #E8FFFE4D'
      }}
      className="rounded-[8px] pt-[6px] flex flex-col space-y-2 justify-center items-center"
    >
      <img className='' src={SRC} alt="Box image" />
      <p className='text-[#fff] text-[12px] font-normal'>{Image}</p>
    </div>
  );
}

export default Boximg;
