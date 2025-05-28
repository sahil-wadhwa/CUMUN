import React from "react";
import './hero.css'

const ImageStack = () => {
  const backgroundImages = [
    "url('https://i.ibb.co/KcyTtsRQ/IMG-9447.jpg')",
    "url('https://i.ibb.co/KcyTtsRQ/IMG-9447.jpg')",
    "url('https://i.ibb.co/KcyTtsRQ/IMG-9447.jpg')",
  ];

  return (
    <div className="relative">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-top z-0"
        style={{
          backgroundImage: image,
        }}
        >
        </div>
      ))}
    </div>
  );
};

export default ImageStack;
