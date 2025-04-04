import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "./HelperFiles/axiosInstance";
import Loader from "./Coponents/Loader";

import "./Styles/Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login({ refresh }) {
  const [loading, setLoading] = useState(null);

  const [formdata, setFormData] = useState({});
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const setValue = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setLoading(<Loader />);

    let username = formdata.username;
    let password = formdata.password;
    try {
      const res = await axiosInstance.post("/login", { username, password });
      localStorage.setItem("token", res.data.token); // Store JWT
      localStorage.setItem("user", JSON.stringify(res.data.userData));
      // console.log(res.data.userData);
      alert(res.data.message);
      setLoading(null);

      refresh();
    } catch (error) {
      setLoading(null);

      // alert(error.response.data.error);
      alert(error.response.data.error);
    }
  };

  const setVisiblity = () => {
    setPasswordVisible(isPasswordVisible ? false : true);
  };

  return (
    <>
      {loading}
      <div className="box" style={{ marginTop: "10vh" }}>
        <h2>Login</h2>
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
          <div className="btns-getin">
            <div className="link-getin" style={{ width: "25vw" }}>
              <Link className="link-text" to="/register">
                Register
              </Link>
            </div>
            <input
              style={{ width: "20vw" }}
              type="submit"
              name="sign-in"
              value="Login"
            />
          </div>
        </form>
      </div>
    </>
  );
}
