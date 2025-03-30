import Carousel from "../Coponents/Carousel";
import Navigation from "../Coponents/Navigation";
import { Link } from "react-router-dom";
//
//
import "../Styles/Home.css";

export default function Home() {
  const images = ["crousel1.png", "crousel1.png", "crousel1.png"];

  return (
    <>
      <Navigation home={true} />
      <img
        src="/Krishi-Mitra-2.0/public/Final Logo.png"
        alt=""
        className="mainLogo"
      />
      <h2 style={{ textAlign: "center" }}> Namaste! {"user"}</h2>
      <Carousel images={images} />
      <div className="home-btns">
        <Link to="/RentEquipment" className="rent-equipment">
          Rent A Equipment
        </Link>
        <Link to="/AddEquipment" className="provide-equipment">
          Provide A Equipment
        </Link>
      </div>
    </>
  );
}
