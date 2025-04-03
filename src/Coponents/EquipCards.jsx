import Domain from "../HelperFiles/Domain";

export default function EquipCards({ details, equipment }) {
  let tempimage = equipment.imagePaths.split(",")[0];

  let image = tempimage.split(/[/\\]/).pop();

  return (
    <>
      <div className="rent-equip-card">
        <img
          src={`${Domain}/assets/equipments/${image}`}
          alt=""
          className="re-img"
        />
        <div className="re-details">
          <div>
            <h4>{equipment.equipName}</h4>
            <span>₹ {equipment.fair} /Day</span>
            <button
              className="btn-re-view-details"
              onClick={() => details(equipment)}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
