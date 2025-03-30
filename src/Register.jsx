import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./Styles/Login.css";
import { useState } from "react";

export default function Register() {
  const [formdata, setFormData] = useState({});
  const [isPasswordVisible, setPasswordVisible] = useState(false);

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
      <div className="box">
        <h2>Register</h2>
        <form onSubmit={submitForm}>
          <div className="inputBox">
            <input
              type="text"
              name="FullName"
              required
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
              onChange={setValue}
              value={formdata.Email || ""}
            />
            <label>Email</label>
          </div>

          <div className="inputBox">
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              required
              onChange={setValue}
              value={formdata.password || ""}
            />
            <label>Passward</label>
            <FontAwesomeIcon
              className="icon"
              onClick={setVisiblity}
              icon={isPasswordVisible ? faEye : faEyeSlash}
            />
          </div>
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

          <div className="inputBox">
            <input
              type="number"
              name="MobileNo"
              required
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
              onChange={setValue}
              value={formdata.pinCode || ""}
            />
            <label>Pincode</label>
          </div>
          <div className="btns-getin">
            <div className="link-getin" style={{ width: "20vw" }}>
              <Link className="link-text" to="/">
                Login
              </Link>
            </div>
            <input
              style={{ width: "25vw" }}
              type="submit"
              name="Register"
              value="Register"
            />
          </div>
        </form>
      </div>
    </>
  );
}
