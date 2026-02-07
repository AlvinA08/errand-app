// pages/Welcome.jsx
import "../styles/welcome.css";
import { useNavigate } from "react-router-dom";
import rideImage from "../assets/ride.jpg";
import estateImage from "../assets/estates.jpg"; // new image import

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-card">

        {/* Image row */}
        <div className="welcome-images">
          <img
            src={rideImage}
            alt="Errand Rider"
            className="welcome-image"
          />

          <img
            src={estateImage}
            alt="Estate"
            className="welcome-image"
          />
        </div>

        <h1 className="logo">Estates Errands</h1>

        <p className="welcome-text">
          You don't have time to go for errands in the estate, send the Errand Boy
        </p>

        <button
          className="explore-btn"
          onClick={() => navigate("/login")}
        >
          Explore
        </button>
      </div>
    </div>
  );
}
