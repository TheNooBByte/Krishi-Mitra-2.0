import "./Styles/GetIn.css";
import MainLogo from "../public/Final Logo.png";
import Login from "./Login";
import { useState } from "react";
import Register from "./Register";
import { Route, Routes } from "react-router-dom";
export default function GetIn() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <div className="container-login">
        <img className="Main-logo" src={MainLogo} alt="" />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* {isLogin ? <Login /> : <Register />}
        {isLogin ? (
          <>
            <p className="sigin-or">OR</p>
            <button className="btn-register" onClick={() => setIsLogin(false)}>
              Register
            </button>
          </>
        ) : (
          <button className="btn-login" onClick={() => setIsLogin(true)}>
            Login
          </button>
        )} */}
      </div>
    </>
  );
}
