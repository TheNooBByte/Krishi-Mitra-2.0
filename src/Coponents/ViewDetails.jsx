import { useState } from "react";
import Carousel from "./Carousel";

export default function ViewDetails({ details }) {
  // const images = ["MahindraRotavator .png", "Rotavator.webp", "crousel1.png"];

  let tempimages = details.imagePaths.split(",");
  let images = [];
  for (let tempimage of tempimages) {
    images.push(`${tempimage.split(/[/\\]/).pop()}`);
  }
  console.log(images);

  // const images = details.imagePaths;
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
        <h2 id="h1">{details.equipName}</h2>
        <h3>{details.brand}</h3>
        <h3>{details.power}</h3>
        <h3>{details.fare}</h3>
        <div className="time-slote">
          <label>
            <h3>Availability</h3>
          </label>
          <h4>{details.froms} </h4>
          <h4>to</h4>
          <h4> {details.tos}</h4>
        </div>
        {/* <div className="disc-box">
          <label>
            <h3>Discreption</h3>
          </label>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            asperiores alias modi ad nostrum officia eos tempore ipsa, sequi
            neque vero delectus ullam, harum nesciunt. Odit, sed ab aliquam
            explicabo a adipisci aspernatur fugit ea illo provident rerum eum
            officiis, cumque molestias voluptas illum exercitationem quidem?
            Doloremque provident dolor sapiente!
          </p>
        </div> */}
        <button className="btn-book-now">Book Now</button>
      </div>
    </>
  );
}
