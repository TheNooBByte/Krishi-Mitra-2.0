import Navigation from "./Navigation";
import "../Styles/RentEquipment.css";
import { useEffect, useState } from "react";
import ViewDetails from "./ViewDetails";
import axiosInstance from "../HelperFiles/axiosInstance";
import EquipCards from "./EquipCards";
import Loader from "../Coponents/Loader";

export default function RentEquipment({ refresh }) {
  const storedUser = localStorage.getItem("user");
  const userObject = storedUser ? JSON.parse(storedUser) : null;

  const [loading, setLoading] = useState(null);

  const [isViewDetail, setIsViewDetail] = useState(null);
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    setLoading(<Loader />);

    axiosInstance
      .get("/rentequipment", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setLoading(null);

        console.log(res.data);
        setEquipments(res.data);
        console.log(res.data.length);
      })
      .catch((err) => {
        setLoading(null);
        console.log(err);
        if (err.status == 403) {
          localStorage.clear();
          refresh();
        }
      });
  }, []);

  let showDetails = (details, userid) => {
    setIsViewDetail(<ViewDetails details={details} userId={userid} />);
  };

  return (
    <>
      {loading}
      <Navigation home={true} />
      {isViewDetail}
      {isViewDetail == null && (
        <div className="rent-equipment-container">
          {equipments?.map((equipment, index) => (
            <EquipCards
              key={index}
              details={showDetails}
              equipment={equipment}
              isOwn={equipment.userId == userObject.id}
              userid={equipment.userId}
            />
          ))}
        </div>
      )}
    </>
  );
}
