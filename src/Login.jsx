import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "./Styles/Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
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
            <label>Passward</label>
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
