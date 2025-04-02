import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Navigation from "../Coponents/Navigation";
import MainLogo from "/public/Final Logo.png";

import "../Styles/Profile.css";

export default function Profile() {
  const [formdata, setFormData] = useState({});
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isEdite, setIsEdite] = useState(false);

  useEffect(() => {
    let formdata = {
      FullName: "shivam",
      Email: "shivam@gmail.com",
      password: "12345678",
      MobileNo: "8623876761",
      pinCode: "401209",
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
  };

  const setVisiblity = () => {
    setPasswordVisible(isPasswordVisible ? false : true);
  };

  return (
    <>
      <Navigation profile={true} />
      <div className="container-addEquipment">
        <img className="Main-logo" src={MainLogo} alt="" />
        <div className="box">
          <h2>Profile</h2>
          <form onSubmit={submitForm}>
            <div className="inputBox">
              <input
                type="text"
                name="FullName"
                required
                disabled={!isEdite}
                onChange={setValue}
                value={formdata.FullName || ""}
              />
              <label>Full Name</label>
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
                name="MobileNo"
                required
                disabled={!isEdite}
                onChange={setValue}
                value={formdata.MobileNo || ""}
              />
              <label>Mobile No</label>
            </div>
            <div className="inputBox">
              <input
                type="number"
                name="pinCode"
                required
                disabled={!isEdite}
                onChange={setValue}
                value={formdata.pinCode || ""}
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
