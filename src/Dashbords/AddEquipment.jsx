import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "../Coponents/Navigation";
import "../Styles/AddEquipment.css";
import MainLogo from "/public/Final Logo.png";
import { useState } from "react";

export default function AddEquipment() {
  const [formdata, setFormData] = useState({});
  const setValue = (event) => {
    setFormData((formdata) => {
      formdata[event.target.name] = event.target.value;
      return { ...formdata };
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
  };

  // const setVisiblity = () => {
  //   setPasswordVisible(isPasswordVisible ? false : true);
  // };
  return (
    <>
      <Navigation addequipment={true} />
      <div className="container-addEquipment">
        <img className="Main-logo" src={MainLogo} alt="" />
        <div className="box">
          <h2>Add Equipment</h2>
          <form onSubmit={submitForm}>
            <div className="inputBox">
              <input
                type="text"
                name="equipmentname"
                required
                onChange={setValue}
                value={formdata.equipmentname || ""}
              />
              <label>Equipment Name</label>
            </div>
            <div className="inputBox">
              <select
                className="input"
                name="equipmentType"
                value={formdata.equipmentType || ""}
                onChange={setValue}
                id=""
              >
                <option value="null"></option>
                <option className="option" value="a">
                  a
                </option>
                <option value="b">b</option>
                <option value="c">c</option>
                <option value="d">d</option>
              </select>
              <label>Equipment Type</label>
            </div>
            <div className="inputBox">
              <select
                className="input"
                name="brand"
                value={formdata.brand || ""}
                onChange={setValue}
                id=""
              >
                <option value="null"></option>
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
                <option value="d">d</option>
              </select>
              <label>Brand</label>
            </div>
            <div className="inputBox">
              <select
                className="input"
                name="implementPower"
                value={formdata.implementPower || ""}
                onChange={setValue}
                id=""
              >
                <option value="null"></option>
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
                <option value="d">d</option>
              </select>
              <label>Implement Power</label>
            </div>

            <div className="inputBox">
              <input
                type="date"
                name="fromDate"
                required
                onChange={setValue}
                value={formdata.fromDate || ""}
              />
              <label>From</label>
            </div>
            <div className="inputBox">
              <input
                type="date"
                name="toDate"
                required
                onChange={setValue}
                value={formdata.toDate || ""}
              />
              <label>To</label>
            </div>
            <div className="inputBox">
              <input
                type="number"
                name="amount"
                required
                onChange={setValue}
                value={formdata.amount || ""}
              />
              <label>Amount ₹</label>
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
                // min={1}
                // max={6}
                required
                onChange={setValue}
                value={formdata.pinCode || ""}
              />
              <label>Pincode</label>
            </div>
            <div className="inputBox">
              <input
                type="file"
                accept=".png"
                // name="pinCode"
                required
                // onChange={setValue}
                // value={formdata.pinCode || ""}
              />
              <label>Image</label>
            </div>

            <input
              style={{ marginLeft: "6vw", width: "40vw" }}
              type="submit"
              name="Submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}
