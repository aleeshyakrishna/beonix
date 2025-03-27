import React, { useState, useEffect } from "react";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import logo from "../../assets/images/logo.png";

const BannerComp = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [banner1, banner2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen">
      {" "}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          opacity: 0.8,
        }}
      >
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      {/* Centered text */}
      <div className="relative h-full flex items-center justify-center">
      <div className="flex items-center">
        <img src={logo} alt="" className="h-[50px] w-auto" />
      </div>
      </div>
      {/* Image indicator dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex
                ? "bg-yellow-400"
                : "bg-white opacity-50"
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerComp;
