import Domain from "../HelperFiles/Domain";

import { useState, useEffect } from "react";
import "../Styles/Carousel.css";

export default function Carousel({ home, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // const prevSlide = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //   );
  // };

  useEffect(() => {
    const interval = setInterval(nextSlide, 1200);
    return () => clearInterval(interval);
  }, []);
  return 
    <div className="home-container">
      <div className="carousel-container">
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={
                home
                  ? `${Domain}/assets/equipments/` + img
                  : `${Domain}/assets/equipments/${img}`
              }
              alt={`Slide ${index}`}
              className="carousel-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
