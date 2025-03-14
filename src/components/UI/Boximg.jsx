import React from 'react';

function Boximg({ Image, SRC, WIDTH, HEIGHT, Arrow = false ,className , classNameImage , classNameText}) {
  // Split the text on newline characters
  const lines = Image.split('\n');

  return (
    <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        // borderBottomWidth: '0.82px',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 105.05%)',
        boxShadow: '0px 0px 0px 0px #FFFFFF80 inset, 0px -2px 40px 0px #10E0D726, 0px -2px 10px 0px #E8FFFE4D'
      }}
      className={`rounded-[8px] ${className} pt-[6px] relative flex flex-col space-y-2 justify-center items-center ${Image === "Time until flight" && "flex-col-reverse items-start pl-3"}`}
    >
      <img className={`${Arrow && "mr-7"} ${classNameImage}`} src={SRC} alt="Box image" />
      {Arrow && <img className='absolute right-0 mb-20 max-md:mb-10' src="Route.svg" alt="Box image" />}
      <p className={`text-[#fff] text-[12px] font-normal max-md:text-[10px] max-md:leading-[11px] ${classNameText}`}>
        {lines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}

export default Boximg;
