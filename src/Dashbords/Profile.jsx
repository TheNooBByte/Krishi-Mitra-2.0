import Navigation from "../Coponents/Navigation";
import "../Styles/Profile.css";

export default function Profile() {
  return (
    <>
      <Navigation profile={true} />
      <h1> Profile page</h1>
    </>
  );
}
