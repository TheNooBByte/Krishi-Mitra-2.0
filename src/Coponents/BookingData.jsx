import "../Styles/BookingData.css";

export default function BookingData({ datas }) {
  return (
    <>
      <div className="data-inner-container">
        <div>
          <strong>Date</strong>
        </div>
        <div>
          <strong>Booking Id</strong>
        </div>
        <div>
          <strong>Equipment</strong>
        </div>
        <div>
          <strong>Price</strong>
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
          <strong>Dateails</strong>
        </div>
      </div>
    </>
  );
}
