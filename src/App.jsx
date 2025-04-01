// import { useState } from "react";
// import "./App.css";
import AddEquipment from "./Dashbords/AddEquipment";
import Dashbord from "./Dashbords/Dashbord";
import Home from "./Dashbords/Home";
import Profile from "./Dashbords/Profile";
import RentEquipment from "./Coponents/RentEquipment";
import GetIn from "./GetIn";
// import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BookingDetails from "./Coponents/BookingDetails";

function App() {
  return (
    <>
      {/* <GetIn /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashbord" element={<Dashbord />} />
        <Route path="/AddEquipment" element={<AddEquipment />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/RentEquipment" element={<RentEquipment />} />
        <Route path="/BookingDetails" element={<BookingDetails />} />
      </Routes>
    </>
  );
}

export default App;
