import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Navigation from "../Coponents/Navigation";
import MainLogo from "/public/Final Logo.png";
import Loader from "../Coponents/Loader";

import "../Styles/Profile.css";
import axiosInstance from "../HelperFiles/axiosInstance";

export default function Profile() {
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
            {isEdite ? (
              <input
                style={{ marginLeft: "33vw" }}
                type="submit"
                name="Done"
                value="Done"
              />
            ) : (
              <button
                style={{
                  margin: "auto",
                }}
                className="edite-btn"
                onClick={() => setIsEdite(true)}
              >
                <i className="fa-solid fa-pen-to-square"></i>
                Edit
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
