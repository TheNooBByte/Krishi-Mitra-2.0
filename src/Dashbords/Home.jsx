import Carousel from "../Coponents/Carousel";
import Navigation from "../Coponents/Navigation";
import { Link } from "react-router-dom";
import Domain from "../HelperFiles/Domain";

//
//
import "../Styles/Home.css";

export default function Home() {
  const images = ["crousel1.png", "Crousel2.png", "Crousel3.png"];
  const storedUser = localStorage.getItem("user");
  const userObject = storedUser ? JSON.parse(storedUser) : null;

  // console.log(userObject); // { name: "John", age: 25, city: "New York" }
  console.log(userObject.username);

  return (
    <>
      <Navigation home={true} />
      <img
        src={`${Domain}/assets/equipments/Final Logo.png`}
        alt=""
        className="mainLogo"
      />
      <div className="bgcolor">
        <h2 style={{ textAlign: "center" }}> Namaste! {userObject.username}</h2>
        <Carousel home={true} images={images} />
        <div className="home-btns">
          <Link to="/RentEquipment" className="rent-equipment">
            Rent Equipment
          </Link>
          <Link to="/AddEquipment" className="provide-equipment">
            Provide Equipment
          </Link>
        </div>

        {/* 🌱 Yeh flex ke bahar rakha niche center me */}
        <div className="crop-btn-container">
          <Link to="/CropRecommendation" className="crop-recommendation">
            Get Crop Recommendation
          </Link>
        </div>

        <div className="home-card">
          <div className="inr">
            <img
              src={`${Domain}/assets/equipments/homep1.png`}
              alt=""
              className="imginr"
            />
            <div className="disc-inr">
              INR 10,218 Farmer’s Average Monthly Income
            </div>
          </div>
          <div className="wheat">
            <img
              src={`${Domain}/assets/equipments/Sucide.png`}
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
