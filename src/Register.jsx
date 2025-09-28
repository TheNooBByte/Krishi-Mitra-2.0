import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "./HelperFiles/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Coponents/Loader";

import "./Styles/Login.css";
import { useState } from "react";

export default function Register() {
  const [loading, setLoading] = useState(null);
  const [formdata, setFormData] = useState({});
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [step, setStep] = useState(1); // ✅ Step tracker
  const navigate = useNavigate();

  const setValue = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const setFile = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.files[0],
    }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setLoading(<Loader />);

    if (formdata.password === formdata.Confpassword) {
      try {
        const form = new FormData();
        for (let key in formdata) {
          form.append(key, formdata[key]);
        }

        const res = await axiosInstance.post("/register", form, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        alert(res.data.message);
        setLoading(null);
        navigate("/"); // ✅ success ke baad login page
      } catch (error) {
        setLoading(null);
        console.log(error);

        alert(error.response?.data?.error || "Registration failed");
      }
    } else {
      alert("❌ Password and Confirm Password do not match!");
      setLoading(null);
    }
  };

  const setVisiblity = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <>
      {loading}
      <div className="box">
        <h2>Register</h2>

        {/* Step 1 - Basic Info */}
        {step === 1 && (
          <form>
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
              {/* Back button - login page pe bhejega */}
              <div className="link-getin" style={{ width: "20vw" }}>
                <Link className="link-text" to="/">
                  Back
                </Link>
              </div>

              {/* Next button - Step 2 pe le jayega */}
              <div className="link-getin" style={{ width: "20vw" }}>
                <button
                  type="button"
                  className="link-text"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    width: "100%",
                  }}
                  onClick={() => setStep(2)} // ✅ ye step change karega
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Step 2 - Aadhaar KYC */}
        {step === 2 && (
          <form onSubmit={submitForm} encType="multipart/form-data">
            <div className="inputBox">
              <input
                type="text"
                name="aadhaarNo"
                required
                onChange={setValue}
                value={formdata.aadhaarNo || ""}
              />
              <label>Aadhaar Number</label>
            </div>
            <div className="inputBox">
              <label>Aadhaar Front</label>
              <input
                type="file"
                name="aadhaarFront"
                accept="image/*"
                required
                onChange={setFile}
              />
            </div>
            <div className="inputBox">
              <label>Aadhaar Back</label>
              <input
                type="file"
                name="aadhaarBack"
                accept="image/*"
                required
                onChange={setFile}
              />
            </div>

            <div className="btns-getin">
              <button
                type="button"
                className="link-getin"
                style={{ width: "20vw" }}
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <input
                style={{ width: "25vw" }}
                type="submit"
                name="Register"
                value="Register"
              />
            </div>
          </form>
        )}
      </div>
    </>
  );
}
