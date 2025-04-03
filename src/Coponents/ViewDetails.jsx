// import { useState } from "react";
import Carousel from "./Carousel";

export default function ViewDetails({ details }) {
  // const images = ["MahindraRotavator .png", "Rotavator.webp", "crousel1.png"];

  let tempimages = details.imagePaths.split(",");
  let images = [];
  for (let tempimage of tempimages) {
    images.push(`${tempimage.split(/[/\\]/).pop()}`);
  }
  // console.log(images);
  // console.log("details are:-", details);

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
        <p>{details.brand}</p>
        <p>{details.power}</p>
        <p>{details.fair}/Day</p>
        <div className="time-slote">
          <label>
            <p>Availability</p>
          </label>
          <p>{details.froms} </p>
          <h4>to</h4>
          <p> {details.tos}</p>
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
