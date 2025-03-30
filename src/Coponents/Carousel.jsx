import { useState, useEffect } from "react";
import "../Styles/Carousel.css";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const images = ["crousel1.png", "crousel1.png", "crousel1.png"];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // const prevSlide = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //   );
  // };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
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
              src={"/Krishi-Mitra-2.0/public/" + img}
              alt={`Slide ${index}`}
              className="carousel-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
