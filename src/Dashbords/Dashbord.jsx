import BookingData from "../Coponents/BookingData";
import Navigation from "../Coponents/Navigation";
import { useEffect, useState } from "react";
import "../Styles/Dashboard.css";
import axiosInstance from "../HelperFiles/axiosInstance";

export default function Dashbord() {
  const [requestdata, setRequestdata] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/dashBoard") // ✅ match backend route
      .then((res) => {
        // Backend sends { message: "Success", data: [...] }
        setRequestdata(res.data.data);
        console.log("the data is :- "+res);
        
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  }, []);

  return (
    <>
      <Navigation dasbord={true} />
      <img
        src="/Krishi-Mitra-2.0/public/Final Logo.png"
        alt=""
        className="mainLogo"
      />
      <h1 style={{ textAlign: "center" }}>Dashboard</h1>
      <div className="dashbord-container">
        {requestdata.length > 0 ? (
          requestdata.map((rqdata, index) => (
            <BookingData key={index} datas={rqdata} />
          ))
        ) : (
          <p>No bookings found</p>
        )}
      </div>
    </>
  );
}
