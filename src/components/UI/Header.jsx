import React, { useState } from 'react';

function Header() {
  // Manage which nav link is active (for styling purposes)
  const [active, setActive] = useState('home');

  // Define nav items with labels and specific container widths per your spec.
  const navItems = [
    { id: 'home', label: 'Home', containerWidth: 75 },
    { id: 'features', label: 'Features', containerWidth: 95 },
    { id: 'about-us', label: 'About Us', containerWidth: 89 },
    { id: 'contact', label: 'Contact', containerWidth: 97 },
  ];

  return (
    <header className="relative w-full z-50">
      <div className="flex items-center justify-between p-4 text-white">
        <div className="flex items-center mt-7 ml-[107px]">
          <img 
            src="g8way.svg" 
            alt="Company Logo" 
            className="w-28 h-7" 
          />
        </div>
        {/* This empty div can be used for extra header content on the right */}
        <div></div>
      </div>

      {/* Centered Nav Menu Container */}
      <div 
        className="absolute"
        style={{
          width: '422px',
          height: '52px',
          left: '50%',
          top: '30px',
          transform: 'translateX(-50%)'
        }}
      >
        {/* Background Rectangle */}
        <div 
          className="absolute rounded-lg"
          style={{
            width: '422px',
            height: '52px',
            background: 'rgba(88, 89, 91, 0.2)',
            top: 0,
            left: 0
          }}
        ></div>

        {/* Actual Menu */}
        <div 
          className="absolute flex items-center justify-between"
          style={{
            width: '410px',
            height: '37px',
            left: '50%',
            top: '7px',
            transform: 'translateX(-50%)',
            gap: '18px'
          }}
        >
          {navItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center justify-center rounded-lg cursor-pointer transition-colors ${
                active === item.id ? 'bg-white' : ''
              }`}
              style={{
                width: `${item.containerWidth}px`,
                height: '37px'
              }}
            >
              <span 
                className="text-[16px] font-medium"
                style={{
                  color: active === item.id ? '#1E1E1E' : '#FFFFFF'
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
