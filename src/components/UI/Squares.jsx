import React from "react";

const Squares = ({ squareSize, borderColor , bgColor  }) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10"
      style={{ background: bgColor }}
    >
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, minmax(${squareSize}px, 1fr))`,
          gridAutoRows: `${squareSize}px`,
        }}
      >
        {Array.from({ length: 500 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-full"
            style={{
              border: `1px solid ${borderColor}`,
              boxSizing: "border-box",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Squares;
