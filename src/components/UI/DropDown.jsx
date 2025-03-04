import { useState } from "react";

const Dropdown = ({ title, icon, arrowIcon, imageSrc, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-md:w-[91.47%] max-w-lg mx-auto border border-[#86868B33] rounded-lg bg-[#050C0C] text-white shadow-md">
      {/* Dropdown Button (Title Section) */}
      <button
        className="flex items-center justify-between w-full p-4 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background:
            "linear-gradient(179.12deg, rgba(255, 255, 255, 0.05) 0.76%, rgba(255, 255, 255, 0) 104.16%)",
        }}
      >
        {/* Left Section: Icon + Text */}
        <div className="flex items-center space-x-3">
          <img src={icon} alt="Icon" className="w-8 h-8" />
          <span className="font-roboto font-bold max-sm:max-w-[215px] text-left text-[20px] leading-[27px] tracking-[2%] uppercase">
            {title}
          </span>
        </div>

        {/* Right Section: Arrow Icon */}
        <img
          src="arrowDropdown.svg"
          alt="Arrow"
          className={`w-[23px] h-[20px] transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-90"
          }`}
        />
      </button>

      {/* Dropdown Content (Inside Same Container) */}
      {isOpen && (
        <div className="p-4 flex flex-col items-center">
          <img
            src={imageSrc}
            alt="Dropdown Image"
            className="w-full max-w-xs h-auto rounded-[12px]"
          />
          <p className="mt-2 font-roboto font-normal text-[16px] leading-[24px] tracking-[0%] text-white text-left w-full max-w-xs">
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
