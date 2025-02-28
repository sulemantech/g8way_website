import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { div } from "framer-motion/client";
import DownloadTheApp from "./DownloadTheApp";

function Header({ scrollToSection, refs }) {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", containerWidth: 75 },
    { id: "features", label: "Features", containerWidth: 95 },
    { id: "about", label: "About us", containerWidth: 89 },
    { id: "contact", label: "Contact", containerWidth: 97 },
  ];

  return (
    <div className="relative w-full h-[110px] z-50">
      <div className="flex items-center justify-between p-4 text-white">
        {/* Logo */}
        <div className="flex items-center mt-7 ml-[107px] max-lg:ml-[4%]">
          <img src="g8way.svg" alt="Company Logo" className="w-28 h-7" />
        </div>

        <div
          className="md:hidden p-2 z-50 text-white w-[48px] h-[48px] bg-[#141819] rounded-lg flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-col space-y-2 transition-transform duration-300">
            <div
              className={`w-4 h-0.5 bg-[#fff] rounded-lg transition-transform duration-300 ${isOpen ? "rotate-45 mt-0" : ""
                }`}
            ></div>
            <div
              className={`w-4 h-0.5 bg-[#fff] rounded-lg transition-transform duration-300 ${isOpen ? "-rotate-45 -mt-2.5" : ""
                }`}
            ></div>
          </div>


        </div>
      </div>

      <div
        className={`md:flex max-lg:scale-95 ${isOpen ? 'flex' : 'hidden'} w-[422px] h-[52px] left-1/2 top-[30px] max-md:top-16 transform -translate-x-1/2 absolute max-md:min-h-[96vh] max-md:w-[100vw] max-md:bg-[#050C0C]`}
      >
        <div
          className="absolute rounded-lg max-md:hidden"
          style={{
            width: "422px",
            height: "52px",
            background: "rgba(88, 89, 91, 0.2)",
            top: 0,
            left: 0,
          }}
        ></div>

        {/* Actual Menu */}
        <div
          className="absolute flex items-center justify-between w-[410px] h-[37px] top-[7px] max-md:w-[91.47vw] max-md:top-16 max-md:flex-col"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            gap: "18px",
          }}
        >
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setActive(item.id);
                scrollToSection(refs[item.id]);
              }}
              className={`flex items-center justify-center max-md:min-w-full max-md:z-[60] max-md:min-h-[56px] rounded-lg cursor-pointer transition-colors ${active === item.id ? "bg-white" : "max-md:bg-[#1E202199]"
                }`}
              style={{
                width: `${item.containerWidth}px`,
                height: "37px",
              }}
            >
              <span
                className="text-[16px] font-medium leading-[24px] tracking-[0%]"
                style={{
                  color: active === item.id ? "#1E1E1E" : "#FFFFFF",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
        <div className="w-[100%] absolute bottom-3 md:hidden">
          <DownloadTheApp width="100%" />
        </div>
      </div>
    </div>
  );
}

export default Header;
