import Navigation from "./Navigation";
import MainLogo from "/public/Final Logo.png";
import "../Styles/Profile.css";
import { useState } from "react";

export default function CropRecommendation() {
  const [district, setDistrict] = useState("");
  const [season, setSeason] = useState("");
  const [recommendation, setRecommendation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

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

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <input
                type="text"
                name="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                required
              />
              <label>Enter District</label>
            </div>

            <div className="inputBox">
              <input
                type="text"
                name="season"
                value={season}
                onChange={(e) => setSeason(e.target.value)}
                required
              />
              <label>Season (e.g. Kharif, Rabi)</label>
            </div>

            {/* Button */}
            <button
              type="submit"
              style={{
                marginTop: "15px",
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Get Recommendation
            </button>
          </form>

          {/* Recommendations List */}
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
