import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import "../Styles/BookingDetails.css";
import Carousel from "./Carousel";
// import MainLogo from "../Krish-Mitra-2.0/public/Final Logo.png";

export default function BookingDetails() {
  const images = ["crousel1.png", "Crousel2.png", "Crousel3.png"];
  const location = useLocation();
  // const MainLogo = "/Final Logo.png";
  const data = location.state || {};
  return (
    <>
      <Navigation dasbord={true} />
      <div className="container-login">
        <img className="Main-logo" src="Final Logo.png" alt="" />
        <div className="inner-cont-reuestd">
          <h2 style={{ textAlign: "center" }}>Request details</h2>
          <div className="bkdetails-container">
            <div>
              Date: <strong>10-10-1993</strong>
            </div>
            <div>
              Equipment Name: <strong>Eg. Rotavator</strong>
            </div>
            <div
              style={{
                width: "60vw",
              }}
            >
              <strong
                className="action-btns"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <button style={{ background: "#5CB338" }}>Accept</button>
                <button
                  style={{ background: "#FB4141", border: "solid 1px red" }}
                >
                  Reject
                </button>
              </strong>
            </div>
            <div>
              Renter Name: <strong>Kishori Lal</strong>
            </div>
            <div>
              Mobile no: <strong>8282629214</strong>
            </div>
          </div>
          <div
            style={{
              width: "70%",
              border: "solid 1px",
              overflow: "hidden",
              position: "absolute",
              left: "15%",
            }}
          >
            <Carousel home={false} images={images} />
          </div>
        </div>
      </div>
    </>
  );
}
