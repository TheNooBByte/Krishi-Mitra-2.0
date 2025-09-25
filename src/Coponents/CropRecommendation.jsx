import { useState } from "react";
import Navigation from "../Coponents/Navigation";
import MainLogo from "/public/Final Logo.png";
import "../Styles/CropRecommendation.css"; // ✅ new CSS import

export default function CropRecommendation() {
  const [district, setDistrict] = useState("");
  const [season, setSeason] = useState("");
  const [recommendation, setRecommendation] = useState(null);
  };
  
  return (
    <>
      <Navigation />
      <div className="container-cropReco">
        <img className="cropReco-logo" src={MainLogo} alt="logo" />
        <div className="cropReco-box">
          <h2>Crop Recommendation</h2>
          <form onSubmit={handleSubmit}>
            <div className="cropReco-inputBox">
              <input
                type="text"
                name="district"
                required
                onChange={(e) => setDistrict(e.target.value)}
                value={district}
              />
              <label>District</label>
            </div>

            <div className="cropReco-inputBox">
              <input
                type="text"
                name="season"
                required
                onChange={(e) => setSeason(e.target.value)}
                value={season}
              />
              <label>Season</label>
            </div>

            <input
              type="submit"
              value="Get Recommendation"
              className="cropReco-submit"
            />
          </form>

          {recommendation && (
            <div className="cropReco-result">
              <h3>Suggested Crops:</h3>
              <ul>
                {recommendation.map((crop, idx) => (
                  <li key={idx}>{crop}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
