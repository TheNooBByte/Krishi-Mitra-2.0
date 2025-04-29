import Domain from "../HelperFiles/Domain";

export default function EquipCards({ details, equipment, isOwn, userid }) {
  let tempimage = equipment.imagePaths.split(",")[0];

  let image = tempimage.split(/[/\\]/).pop();
  //   console.log(`${Domain}/assets/equipments/${image}`);
  // console.log(isOwn);
  // console.log(equipment);

  return (
    <>
      <div className="rent-equip-card">
        {isOwn && <div className="overlap">its yours own equpment</div>}

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
              onClick={() => details(equipment,userid)}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
