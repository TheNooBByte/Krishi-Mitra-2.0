import BookingData from "../Coponents/BookingData";
import Navigation from "../Coponents/Navigation";
import "../Styles/Dashboard.css";

export default function Dashbord() {
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
        <div className="headings">
          <div>
            <h3>Date</h3>
          </div>
          <div>
            <h3>Booking Id</h3>
          </div>
          <div>
            <h3>Equipment</h3>
          </div>
          <div>
            <h3>Price</h3>
          </div>
          <div>
            <h3>Action</h3>
          </div>
          <div>
            <h3>Dateails</h3>
          </div>
        </div>
        <div className="data-container">
          <BookingData />
          <BookingData />
          <BookingData />
          <BookingData />
          <BookingData />
          <BookingData />
        </div>
      </div>
    </>
  );
}
