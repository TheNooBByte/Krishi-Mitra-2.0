import "../Styles/BookingData.css";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import { red } from "@mui/material/colors";
import axiosInstance from "../HelperFiles/axiosInstance";
import { useState } from "react";

export default function BookingData({ datas }) {
  const [currStatus, setCurrstatus] = useState(datas.STATUS);
  const navigate = useNavigate();
  const images = datas.imagePaths.split(",");
  const handleNavigate = () => {
    navigate("/BookingDetails", { state: datas });
  };
  let prevStatus = currStatus;
  const handleStatus = (status) => {
    if (prevStatus !== status) {
      axiosInstance
        .post("/dashboard", {
          id: datas.id, // ✅ include ID
          status: status, // ✅ include new status
        })
        .then((res) => {
          console.log(res.data.message);

          setCurrstatus(status);
        })
        .catch((err) => {
          console.error("Error updating status:", err);
        });

      prevStatus = status;
    }
  };

  // console.log(datas);

  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p
              className="status"
              style={{
                backgroundColor:
                  currStatus === "Accepted"
                    ? "green"
                    : currStatus === "Pending"
                    ? "orange"
                    : "red",
              }}
            >
              {currStatus}
            </p>

            <Carousel home={false} images={images} />
            <div className="frtData">
              <div className="frtItem">
                <i className="fas fa-industry"></i>
                <p>
                  <strong>Brand:</strong> {datas.brand}
                </p>
              </div>
              <div className="frtItem">
                <i className="fas fa-tools"></i>
                <p>
                  <strong>Equipment Name:</strong> {datas.equipName}
                </p>
              </div>
              <div className="frtItem">
                <i className="fas fa-cogs"></i>
                <p>
                  <strong>Equipment Type:</strong> {datas.equipType}
                </p>
              </div>
              <div className="frtItem">
                <i className="fas fa-bolt"></i>
                <p>
                  <strong>Power:</strong> {datas.power}
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="bookingDetails">
              {/* Availability Section */}
              <div className="availabilityBox">
                <div className="availItem">
                  <i className="fas fa-calendar-alt"></i>
                  <p>
                    <strong>From:</strong> {datas.froms}
                  </p>
                </div>
                <div className="availItem">
                  <i className="fas fa-calendar-check"></i>
                  <p>
                    <strong>Till:</strong> {datas.tos}
                  </p>
                </div>
              </div>

              {/* Renter Section */}
              <h3 className="renterHeading">Renter Details</h3>
              <div className="renterBox">
                <div className="renterItem">
                  <i className="fas fa-user"></i>
                  <p>
                    <strong>Name:</strong> {datas.renterID}
                  </p>
                </div>
                <div className="renterItem">
                  <i className="fas fa-phone"></i>
                  <p>
                    <strong>Phone:</strong> {datas.mobileNo}
                  </p>
                </div>
                <div className="renterItem">
                  <i className="fas fa-rupee-sign"></i>
                  <p>
                    <strong>Fair / Day:</strong> ₹{datas.totalFair}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="bookingActions">
                {currStatus == "Accepted" ? (
                  <button
                    className="bookBtn rejectBtn"
                    onClick={() => handleStatus("Rejected")}
                  >
                    Reject
                  </button>
                ) : currStatus == "Pending" ? (
                  <>
                    <button
                      className="bookBtn acceptBtn"
                      onClick={() => handleStatus("Accepted")}
                    >
                      Accept
                    </button>
                    <button
                      className="bookBtn rejectBtn"
                      onClick={() => handleStatus("Rejected")}
                    >
                      Reject
                    </button>
                  </>
                ) : (
                  <button
                    className="bookBtn acceptBtn"
                    onClick={() => handleStatus("Accepted")}
                  >
                    Accept
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
