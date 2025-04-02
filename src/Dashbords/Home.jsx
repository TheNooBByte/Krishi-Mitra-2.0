import Carousel from "../Coponents/Carousel";
import Navigation from "../Coponents/Navigation";
import { Link } from "react-router-dom";
//
//
import "../Styles/Home.css";

export default function Home() {
  const images = ["crousel1.png", "crousel2.png", "crousel3.png"];

  return (
    <>
      <Navigation home={true} />
      <img
        src="/Krishi-Mitra-2.0/public/Final Logo.png"
        alt=""
        className="mainLogo"
      />
      <div className="bgcolor">
        <h2 style={{ textAlign: "center" }}> Namaste! {"user"}</h2>
        <Carousel images={images} />
        <div className="home-btns">
          <Link to="/RentEquipment" className="rent-equipment">
            Hire Equipment
          </Link>
          <Link to="/AddEquipment" className="provide-equipment">
            Get Equipment
          </Link>
        </div>
        <div className="home-card">
          <div className="inr">
            <img
              src="Krishi-Mitra-2.0\public\homep1.png"
              alt=""
              className="imginr"
            />
            <div className="disc-inr">
              INR 10,218 Farmer’s Average Monthly Income
            </div>
          </div>
          <div className="wheat">
            <img
              src="Krishi-Mitra-2.0\public\Sucide.png"
              alt=""
              className="imgwheat"
            />
            <div className="disc-wheat">31 Farmer Suicides in India Daily</div>
          </div>
        </div>
      </div>
    </>
  );
}
