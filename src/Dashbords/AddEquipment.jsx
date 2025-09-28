import { useState, useEffect, useRef } from "react";
import Navigation from "../Coponents/Navigation";
import "../Styles/AddEquipment.css";
import MainLogo from "/public/Final Logo.png";
import axiosInstance from "../HelperFiles/axiosInstance";

export default function AddEquipment() {
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const fileInputRef = useRef(null);

  const today = new Date();
  const tomorrow = new Date(today);
  const dayAfter = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  dayAfter.setDate(today.getDate() + 2);

  const [formdata, setFormData] = useState(() => {
    const id = JSON.parse(localStorage.getItem("user"))?.id || "";
    return { id };
  });

  // Handle text/select/date input changes
  const setValue = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image selection and preview generation
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setPreview(files.map((file) => URL.createObjectURL(file)));
  };

  // Revoke object URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      preview.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [preview]);

  // Submit the form
  const submitForm = async (e) => {
    e.preventDefault();

    // Validate date range
    if (new Date(formdata.toDate) <= new Date(formdata.fromDate)) {
      alert("To date must be after From date.");
      return;
    }

    const formDataToSend = new FormData();
    Object.entries(formdata).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    images.forEach((image) => {
      formDataToSend.append("images", image);
    });

    try {
      const response = await axiosInstance.post(
        "/addequipment",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert(response.data.message);
      setFormData({ id: formdata.id }); // Keep user ID, reset rest
      setImages([]);
      setPreview([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    } catch (error) {
      console.error("Upload Failed:", error);
      alert("Upload Failed!");
    }
  };

  return (
    <>
      <Navigation addequipment={true} />
      <div className="container-addEquipment">
        <img className="Main-logo" src={MainLogo} alt="Main Logo" />
        <div className="box">
          <h2>Add Equipment</h2>
          <form onSubmit={submitForm}>
            {/* Equipment Name */}
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

            {/* Equipment Type */}
            <div className="inputBox">
              <select
                className="input"
                name="equipmentType"
                value={formdata.equipmentType || ""}
                onChange={setValue}
                required
              >
                <option value="">-- Select Equipment Type --</option>
                <option value="Rotavator">Rotavator</option>
                <option value="Thresher">Thresher</option>
                <option value="Trolley">Trolley</option>
                <option value="Disk Plough">Disk Plough</option>
                <option value="Laser Land Leveler">Laser Land Leveler</option>
              </select>
              <label>Equipment Type</label>
            </div>

            {/* Brand */}
            <div className="inputBox">
              <select
                className="input"
                name="brand"
                value={formdata.brand || ""}
                onChange={setValue}
                required
              >
                <option value="">-- Select Brand --</option>
                <option value="Sonalika">Sonalika</option>
                <option value="Mahindra">Mahindra</option>
                <option value="Swaraj">Swaraj</option>
                <option value="Shaktiman">Shaktiman</option>
              </select>
              <label>Brand</label>
            </div>

            {/* Implement Power */}
            <div className="inputBox">
              <select
                className="input"
                name="implementPower"
                value={formdata.implementPower || ""}
                onChange={setValue}
                required
              >
                <option value="">-- Select Power Range --</option>
                <option value="30-40 HP">30-40 HP</option>
                <option value="40-50 HP">40-50 HP</option>
                <option value="60-75 HP">60-75 HP</option>
                <option value="75-None">75-None</option>
              </select>
              <label>Implement Power</label>
            </div>

            {/* From Date */}
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

            {/* To Date */}
            <div className="inputBox">
              <input
                type="date"
                name="toDate"
                min={dayAfter.toISOString().split("T")[0]}
                required
                onChange={setValue}
                value={formdata.toDate || ""}
              />
              <label>To</label>
            </div>

            {/* Fare Per Day */}
            <div className="inputBox">
              <input
                type="number"
                name="amount"
                required
                onChange={setValue}
                value={formdata.amount || ""}
              />
              <label>Fare/Per Day</label>
            </div>

            {/* Mobile Number */}
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

            {/* Pin Code */}
            <div className="inputBox">
              <input
                type="number"
                name="pinCode"
                required
                min="100000"
                max="999999"
                onChange={setValue}
                value={formdata.pinCode || ""}
              />
              <label>Pincode</label>
            </div>

            {/* Images */}
            <div className="inputBox input-images">
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                multiple
                required
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              <label>Upload Images</label>
            </div>

            {/* Preview Images */}
            {preview.length > 0 && (
              <div className="preview-container">
                {preview.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`preview-${idx}`}
                    className="preview-image"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      marginRight: "10px",
                      borderRadius: "6px",
                      border: "1px solid #ccc",
                    }}
                  />
                ))}
              </div>
            )}

            {/* Submit */}
            <input
              style={{ marginLeft: "6vw", width: "40vw" }}
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}
