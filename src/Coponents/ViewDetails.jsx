// import { useState } from "react";
import axiosInstance from "../HelperFiles/axiosInstance";
import Carousel from "./Carousel";

export default function ViewDetails({ details, userId }) {
  // console.log(details, userId);

  // const images = ["MahindraRotavator .png", "Rotavator.webp", "crousel1.png"];

  const storedUser = localStorage.getItem("user");
  const userObject = storedUser ? JSON.parse(storedUser) : null;
  // console.log(userObject);

  let tempimages = details.imagePaths.split(",");
  let images = [];
  for (let tempimage of tempimages) {
    images.push(`${tempimage.split(/[/\\]/).pop()}`);
  }

  let bookNow = () => {
    axiosInstance
      .post("/rentequipment", {
        userdata: { ...details },
        userId: userObject.id,
        mob: userObject.mobileNo,
      })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        // console.log(err);
        alert(err);
      });
  };
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

        <button className="btn-book-now" onClick={bookNow}>
          Book Now
        </button>
      </div>
    </>
  );
}
