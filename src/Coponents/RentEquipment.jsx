import Navigation from "./Navigation";
import "../Styles/RentEquipment.css";
import { useState } from "react";
import ViewDetails from "./ViewDetails";

export default function RentEquipment() {
  const [isViewDetail, setIsViewDetail] = useState(null);

  let details = {
    fullimage: "imge",
    smallimg1: "smlimg1",
    smallimg2: "smlimg2",
    eName: "trailer",
    eBrand: "brand",
    power: "power",
    availabiltyFrom: "from",
    availabiltyTo: "to",
    description: "description",
  };

  return (
    <>
      <Navigation home={true} />
      {isViewDetail == null ? (
        <div className="rent-equipment-container">
          <div className="rent-equip-card">
            <img src="" alt="" className="re-img" />
            <div className="re-details">
              <div>
                <h4>{"Product-Name"}</h4>
                <span>₹ {"2000"} /day</span>
                <button
                  className="btn-re-view-details"
                  onClick={() =>
                    setIsViewDetail(<ViewDetails details={details} />)
                  }
                >
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="rent-equip-card">
            <img src="" alt="" className="re-img" />
            <div className="re-details">
              <div>
                <h4>{"Product-Name"}</h4>
                <span>₹ {"2000"} /day</span>
                <button
                  className="btn-re-view-details"
                  onClick={() =>
                    setIsViewDetail(<ViewDetails details={details} />)
                  }
                >
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="rent-equip-card">
            <img src="" alt="" className="re-img" />
            <div className="re-details">
              <div>
                <h4>{"Product-Name"}</h4>
                <span>₹ {"2000"} /day</span>
                <button
                  className="btn-re-view-details"
                  onClick={() =>
                    setIsViewDetail(<ViewDetails details={details} />)
                  }
                >
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="rent-equip-card">
            <img src="" alt="" className="re-img" />
            <div className="re-details">
              <div>
                <h4>{"Product-Name"}</h4>
                <span>₹ {"2000"} /day</span>
                <button
                  className="btn-re-view-details"
                  onClick={() =>
                    setIsViewDetail(<ViewDetails details={details} />)
                  }
                >
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="rent-equip-card">
            <img src="" alt="" className="re-img" />
            <div className="re-details">
              <div>
                <h4>{"Product-Name"}</h4>
                <span>₹ {"2000"} /day</span>
                <button
                  className="btn-re-view-details"
                  onClick={() =>
                    setIsViewDetail(<ViewDetails details={details} />)
                  }
                >
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="rent-equip-card">
            <img src="" alt="" className="re-img" />
            <div className="re-details">
              <div>
                <h4>{"Product-Name"}</h4>
                <span>₹ {"2000"} /day</span>
                <button
                  className="btn-re-view-details"
                  onClick={() =>
                    setIsViewDetail(<ViewDetails details={details} />)
                  }
                >
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="rent-equip-card">
            <img src="" alt="" className="re-img" />
            <div className="re-details">
              <div>
                <h4>{"Product-Name"}</h4>
                <span>₹ {"2000"} /day</span>
                <button
                  className="btn-re-view-details"
                  onClick={() =>
                    setIsViewDetail(<ViewDetails details={details} />)
                  }
                >
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="rent-equip-card">
            <img src="" alt="" className="re-img" />
            <div className="re-details">
              <div>
                <h4>{"Product-Name"}</h4>
                <span>₹ {"2000"} /day</span>
                <button
                  className="btn-re-view-details"
                  onClick={() =>
                    setIsViewDetail(<ViewDetails details={details} />)
                  }
                >
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="rent-equip-card">
            <img src="" alt="" className="re-img" />
            <div className="re-details">
              <div>
                <h4>{"Product-Name"}</h4>
                <span>₹ {"2000"} /day</span>
                <button
                  className="btn-re-view-details"
                  onClick={() =>
                    setIsViewDetail(<ViewDetails details={details} />)
                  }
                >
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="rent-equip-card">
            <img src="" alt="" className="re-img" />
            <div className="re-details">
              <div>
                <h4>{"Product-Name"}</h4>
                <span>₹ {"2000"} /day</span>
                <button
                  className="btn-re-view-details"
                  onClick={() =>
                    setIsViewDetail(<ViewDetails details={details} />)
                  }
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        isViewDetail
      )}
    </>
  );
}
