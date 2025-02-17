import React from "react";

function TextAnimation({ lines = ["STEP", "INTO THE", "FUTURE"] , Text="1" }) {
    return (
        <div className="ml-[107px] bg-transparent z-50 relative w-fit">
            {lines.map((line, index) => (
                <p
                    key={index}
                    className={`font-roboto mix-blend-lighten ${ index != lines.length - 1 ? 'bg-linear-to-b from-[#e0dfdbe8] to-[#45595bb7]' : 'bg-linear-to-b from-[#93FFFA] to-[#10E0D7] '} text-transparent w-fit bg-clip-text text-[88px] font-extrabold leading-none tracking-[3%] 
            ${index === 0 ? "slideUp" : index === 1 ? "slideUp2" : "slideUp3"}`}
                    style={{
                        animationDelay: `${index * 0.1}s`,
                    }}
                >
                    {line}
                </p>
            ))}
        </div>
    );
}

export default TextAnimation;
