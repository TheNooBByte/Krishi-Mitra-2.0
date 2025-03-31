import { useState } from "react";
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
        <h2 id="h1">Equipemt Name</h2>
        <h3>Brand name</h3>
        <h3>Emplement Power</h3>
        <h3>Fair</h3>
        <div className="time-slote">
          <label>
            <h3>Availability</h3>
          </label>
          <h4>{"Start "} </h4>
          <h4>to</h4>
          <h4> {" end"}</h4>
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
