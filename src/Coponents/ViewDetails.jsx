import Carousel from "./Carousel";

export default function ViewDetails({ details }) {
  const images = ["MahindraRotavator .png", "Rotavator.webp", "crousel1.png"];

  return (
    <>
      <img
        className="vdimg"
        src="/Krishi-Mitra-2.0/public/Final Logo.png"
        alt=""
      />
      <h3 className="vd-Heading">Equipment details</h3>
      <Carousel images={images} />
      <div className="details-container">
        <h1 id="h1">Equipemt Name</h1>
      </div>
    </>
  );
  
}

