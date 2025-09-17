import Navigation from "../Coponents/Navigation";
import MainLogo from "/public/Final Logo.png";
import "../Styles/Profile.css"; // same style use kar rahe hai

import { useState } from "react";

export default function CropRecommendation() {
  const [district, setDistrict] = useState("");
  const [season, setSeason] = useState("");
  const [recommendation, setRecommendation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy recommendation (abhi API ya DB se nahi aata)
    if (district && season) {
      setRecommendation(["🌾 Wheat", "🌾 Rice", "🌽 Maize", "🥔 Potato"]);
    }
  };

  return (
    <>
      <Navigation />
      <div className="container-addEquipment">
        <img className="Main-logo" src={MainLogo} alt="" />
        <div className="box">
          <h2>Crop Recommendation</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <input
                type="text"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                required
              />
              <label>Enter District</label>
            </div>

            <div className="inputBox">
              <input
                type="text"
                value={season}
                onChange={(e) => setSeason(e.target.value)}
                required
              />
              <label>Season (e.g. Kharif, Rabi)</label>
            </div>

            <input
              type="submit"
              value="Get Recommendation"
              style={{
                marginTop: "15px",
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            />
          </form>

          {recommendation && (
            <div style={{ marginTop: "20px" }}>
              <h3>Suggested Crops:</h3>
              <ul>
                {recommendation.map((crop, index) => (
                  <li key={index}>{crop}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
