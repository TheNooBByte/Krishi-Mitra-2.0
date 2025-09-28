import Domain from "../HelperFiles/Domain";

import { useState, useEffect } from "react";
import "../Styles/Carousel.css";

export default function Carousel({ home, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(images);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // console.log(Domain, images);

  // const prevSlide = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //   );
  // };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
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
                  ? `${Domain}/assets/webAssets/` + img
                  : `${Domain}/assets/equipments/` + img
              }
              alt={`Slide ${index} ${Domain}/assets/equipments/ ` + img}
              className="carousel-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
