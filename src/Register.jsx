import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "./HelperFiles/axiosInstance";
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
    if (formdata.password == formdata.Confpassword) {
      // let username = formdata.username;
      // let password = formdata.password;
      try {
        const res = await axiosInstance.post("/register", { ...formdata });
        // console.log(res);
        alert(res.data.message);
      } catch (error) {
        alert(error.response.data.error);
      }
    } else {
      console.log("Err both password are different");
    }
  };

  const setVisiblity = () => {
    setPasswordVisible(isPasswordVisible ? false : true);
  };

  return (
    <>
      {notify}
      <div className="box">
        <h2>Register</h2>
        <form onSubmit={submitForm}>
          <div className="inputBox">
            <input
              type="text"
              name="username"
              required
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
            <label>Password</label>
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
            <label>Confirm Password</label>
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
