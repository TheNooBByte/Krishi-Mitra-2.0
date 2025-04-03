import Navigation from "./Navigation";
import "../Styles/RentEquipment.css";
import { useEffect, useState } from "react";
import ViewDetails from "./ViewDetails";
import axiosInstance from "../HelperFiles/axiosInstance";
import EquipCards from "./EquipCards";

export default function RentEquipment({ refresh }) {
  const [isViewDetail, setIsViewDetail] = useState(null);
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/rentequipment", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res.data);
        setEquipments(res.data);
        console.log(res.data.length);
      })
      .catch((err) => {
        console.log(err);
        if (err.status == 403) {
          localStorage.clear();
          refresh();
        }
      });
  }, []);

  let showDetails = (details) => {
    setIsViewDetail(<ViewDetails details={details} />);
  };

  return (
    <>
      <Navigation home={true} />
      {isViewDetail}
      {isViewDetail == null && (
        <div className="rent-equipment-container">
          {equipments?.map((equipment, index) => (
            <EquipCards
              key={index}
              details={showDetails}
              equipment={equipment}
            />
          ))}
        </div>
      )}
    </>
  );
}
