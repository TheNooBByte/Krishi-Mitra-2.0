import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Navigation from "../Coponents/Navigation";
import { useNavigate } from "react-router-dom";
import MainLogo from "/public/Final Logo.png";
import Loader from "../Coponents/Loader";

import "../Styles/Profile.css";
import axiosInstance from "../HelperFiles/axiosInstance";

export default function Profile() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(null);
  const [formdata, setFormData] = useState({});
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isEdite, setIsEdite] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const userObject = storedUser ? JSON.parse(storedUser) : null;
    let formdata = {
      id: userObject.id,
      username: userObject.username,
      Email: userObject.Email,
      password: null,
      mobileNo: userObject.mobileNo,
      pincode: userObject.pincode,
    };

    setFormData(formdata);
  }, []);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const userObject = storedUser ? JSON.parse(storedUser) : null;
    let formdata = {
      id: userObject.id,
      username: userObject.username,
      Email: userObject.Email,
      password: null,
      mobileNo: userObject.mobileNo,
      pincode: userObject.pincode,
      kycStatus: userObject.kycStatus || "Pending", // ✅ Default "Pending"
    };

    setFormData(formdata);
  }, []);

  const setValue = (event) => {
    setFormData((formdata) => {
      formdata[event.target.name] = event.target.value;
      return { ...formdata };
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setLoading(<Loader />);
    axiosInstance
      .put(
        "/profile",
        { ...formdata },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        alert(res.data.message);
        setLoading(null);
      })
      .catch((err) => {
        setLoading(null);
        alert(err.error);
      });
  };

  const setVisiblity = () => {
    setPasswordVisible(isPasswordVisible ? false : true);
  };

  return (
    <>
      {loading}
      <Navigation profile={true} />
      <div className="container-addEquipment">
        <img className="Main-logo" src={MainLogo} alt="" />
        {/* KYC Status Badge */}
        <div
          style={{
            position: "absolute",
            top: "25px", // ✅ 10px padding from top
            right: "20px", // ✅ 10px padding from right
          }}
        >
          {formdata.kycStatus === "approved" ? (
            <span
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              ✅ Verified
            </span>
          ) : formdata.kycStatus === "rejected" ? (
            <span
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              ❌ Rejected
            </span>
          ) : (
            <span
              style={{
                backgroundColor: "orange",
                color: "white",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              ⏳ Pending
            </span>
          )}
        </div>

        <div className="box">
          <h2>Profile</h2>

          <form onSubmit={submitForm}>
            <div className="inputBox">
              <input
                type="text"
                name="username"
                required
                disabled={!isEdite}
                onChange={setValue}
                value={formdata.username || ""}
              />
              <label>Username</label>
            </div>
            <div className="inputBox">
              <input
                type="email"
                name="Email"
                required
                disabled={!isEdite}
                onChange={setValue}
                value={formdata.Email || ""}
              />
              <label>Email</label>
            </div>

            <div className="inputBox">
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                disabled={!isEdite}
                required
                onChange={setValue}
                value={formdata.password || ""}
              />
              <label>Password</label>
              {isEdite && (
                <FontAwesomeIcon
                  className="icon"
                  onClick={setVisiblity}
                  icon={isPasswordVisible ? faEye : faEyeSlash}
                />
              )}
            </div>
            {isEdite && (
              <div className="inputBox">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  name="Confpassword"
                  required
                  onChange={setValue}
                  value={formdata.Confpassword || ""}
                />
                <label>Confirm Passward</label>
              </div>
            )}

            <div className="inputBox">
              <input
                type="number"
                name="mobileNo"
                required
                disabled={!isEdite}
                onChange={setValue}
                value={formdata.mobileNo || ""}
              />
              <label>Mobile No</label>
            </div>
            <div className="inputBox">
              <input
                type="number"
                name="pincode"
                required
                disabled={!isEdite}
                onChange={setValue}
                value={formdata.pincode || ""}
              />
              <label>Pincode</label>
            </div>
            {/* Buttons Section */}
            {/* Buttons Section */}
            <div
              style={{
                display: "flex",
                justifyContent: isEdite ? "center" : "space-between",
                marginTop: "10px",
              }}
            >
              {isEdite ? (
                <div style={{ display: "flex", gap: "10px" }}>
                  {/* Save button */}
                  <input
                    style={{
                      backgroundColor: "#4CAF50",
                      color: "white",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      width: "100px",
                    }}
                    type="submit"
                    name="Done"
                    value="Save"
                  />

                  {/* Back button */}
                  <button
                    style={{
                      backgroundColor: "gray",
                      color: "white",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      width: "100px",
                    }}
                    onClick={() => setIsEdite(false)}
                  >
                    Back
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "10px", // ✅ Edit left, Logout right
                    marginTop: "10px",
                  }}
                >
                  {/* Edit Button */}
                  <button
                    style={{
                      backgroundColor: "#4CAF50",
                      color: "white",
                      padding: "10px 1px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      width: "100px",
                    }}
                    onClick={() => setIsEdite(true)}
                  >
                    Edit
                  </button>

                  {/* Logout Button */}
                  <button
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      width: "100px",
                    }}
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("user");
                      alert("Logged out successfully!");
                      navigate("/"); // ✅ ab direct login page par chala jayega
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
