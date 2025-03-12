import React, { useEffect, useRef } from "react";

const ViewportObserver = () => {
  const divRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`🟢 ${entry.target.dataset.name} entered viewport`);
          } else {
            console.log(`🔴 ${entry.target.dataset.name} exited viewport`);
          }
        });
      },
      { threshold: 0.5 } 
    );

    divRefs.current.forEach((div) => {
      if (div) observer.observe(div);
    });

    return () => {
      divRefs.current.forEach((div) => {
        if (div) observer.unobserve(div);
      });
    };
  }, []);

  return (
    <div className="h-[200vh] flex flex-col items-center justify-center space-y-10">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (divRefs.current[index] = el)}
          data-name={`Div ${index + 1}`}
          className="w-64 h-64 bg-blue-500 text-white flex items-center justify-center text-xl"
        >
          Div {index + 1}
        </div>
      ))}
    </div>
  );
};

export default ViewportObserver;
