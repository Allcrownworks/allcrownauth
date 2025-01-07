import React from 'react';

const SmokeEffect = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="absolute w-32 h-32 bg-white rounded-full opacity-20 animate-smoke"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${index * 2}s`,
            filter: 'blur(20px)',
          }}
        ></div>
      ))}
    </div>
  );
};

export default SmokeEffect;
