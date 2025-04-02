import "../Styles/BookingData.css";
import { useNavigate } from "react-router-dom";

export default function BookingData({ datas }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/BookingDetails", { state: datas });
  };

  return (
    <>
      <div className="data-inner-container">
        <div>
          <strong>Date</strong>
        </div>
        <div>
          <strong>Booking_Id</strong>
        </div>
        <div>
          <strong>Equipment</strong>
        </div>
        <div>
          <strong>Fare</strong>
        </div>
        <div>
          <strong className="action-btns">
            <button style={{ background: "#5CB338" }}>Accept</button>
            <button style={{ background: "#FB4141", border: "solid 1px red" }}>
              Reject
            </button>
          </strong>
        </div>
        <div>
          <strong>
            <button className="view-details" onClick={handleNavigate}>
              View Details
            </button>
          </strong>
        </div>
      </div>
    </>
  );
}
