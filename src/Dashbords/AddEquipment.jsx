// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "../Coponents/Navigation";
import "../Styles/AddEquipment.css";
import MainLogo from "/public/Final Logo.png";
import axiosInstance from "../HelperFiles/axiosInstance";
import { useState } from "react";

export default function AddEquipment() {
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  //
  //
  //

  const today = new Date();
  const tomorrow = new Date();
  const todate = new Date();
  tomorrow.setDate(today.getDate() + 1);
  todate.setDate(today.getDate() + 2);
  //
  //
  //
  //
  //
  const [formdata, setFormData] = useState({});
  const id = JSON.parse(localStorage.getItem("user")).id;
  const setValue = (event) => {
    setFormData((formdata) => {
      formdata.id = id;
      formdata[event.target.name] = event.target.value;
      return { ...formdata };
    });
  };
  //
  //
  //

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setPreview(files.map((file) => URL.createObjectURL(file)));
  };
  //
  //
  //
  //

  const submitForm = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.entries(formdata).forEach(([key, value]) => {
      formData.append(key, value);
    });

    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await axiosInstance.post("/addequipment", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setFormData({});
      alert(response.data.message);
    } catch (error) {
      console.error("Upload Failed:", error);
      alert("Upload Failed!");
    }

    // axiosInstance
    //   .post(
    //     "/addequipment",
    //     { ...formdata },
    //     {
    //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    //     }
    //   )
    //   .then((res) => {
    //     alert(res.data.message);
    //   })
    //   .catch((err) => {
    //     alert(err.error);
    //   });
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
                  Rotavator
                </option>
                <option value="Thresher">Thresher</option>
                <option value="Trolley">Trolley</option>
                <option value="Disk Plough">Disk Plough</option>
                <option value="Laser Land Leveler">Laser Land Leveler </option>
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
                <option value="Sonalika">Sonalika</option>
                <option value="Mahindra">Mahindra</option>
                <option value="Swaraj">Swaraj</option>
                <option value="Shaktiman">Shaktiman</option>
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
                <option value="30-40 HP">30-40 HP</option>
                <option value="40-50 HP">40-50 HP</option>
                <option value="60-75 HP">60-75 HP</option>
                <option value="75-None">75-None</option>
              </select>
              <label>Implement Power</label>
            </div>

            <div className="inputBox">
              <input
                type="date"
                name="fromDate"
                required
                min={tomorrow.toISOString().split("T")[0]}
                onChange={setValue}
                value={formdata.fromDate || ""}
              />
              <label>From</label>
            </div>
            <div className="inputBox">
              <input
                type="date"
                name="toDate"
                min={todate.toISOString().split("T")[0]}
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
              <label>Fare/Per Day </label>
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
            <div className="inputBox input-images">
              <input
                type="file"
                accept="image/png, image/jpeg"
                multiple
                required
                onChange={handleFileChange}
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
