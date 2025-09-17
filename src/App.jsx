// import { useState } from "react";
// import "./App.css";
import AddEquipment from "./Dashbords/AddEquipment";
import Dashbord from "./Dashbords/Dashbord";
import Home from "./Dashbords/Home";
// import CropRecommendation from "./CropRecommendation"; 
import Profile from "./Dashbords/Profile";
import RentEquipment from "./Coponents/RentEquipment";
import GetIn from "./GetIn";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BookingDetails from "./Coponents/BookingDetails";
// import ImageUpload from "./Coponents/ImageUpload";
// import Notification from "./Coponents/Notification";

function App() {
  const [isLoggedin, setIsloggedin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      setIsloggedin(true);
    }
  }, []);

  let refresh = () => {
    // console.log("refreshed");
    if (localStorage.getItem("user") != null) {
      setIsloggedin(true);
    }
  };

  return (
    <>
      {/* <ImageUpload /> */}

      {!isLoggedin ? (
        <GetIn refresh={refresh} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashbord" element={<Dashbord />} />
          <Route path="/AddEquipment" element={<AddEquipment />} />
          <Route path="/Profile" element={<Profile />} />
          {/* <Route path="/CropRecommendation" element={<CropRecommendation />} /> */}
          <Route
            path="/RentEquipment"
            element={<RentEquipment refresh={refresh} />}
          />
          <Route path="/BookingDetails" element={<BookingDetails />} />
        </Routes>
      )}
    </>
  );
}

export default App;
