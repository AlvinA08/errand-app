import { useNavigate } from "react-router-dom";
import "../styles/discover.css";

export default function Discover() {
  const navigate = useNavigate();

  return (
    <div className="discover-page">
      <h2>Discover Services</h2>

      <div className="discover-grid">
        <div onClick={() => navigate("/market")}>Market Errands</div>
        <div onClick={() => navigate("/delivery")}>Delivery</div>
        <div onClick={() => navigate("/pickup")}>Pick Up</div>
        <div onClick={() => navigate("/other-errands")}>Other Errands</div>
      </div>
    </div>
  );
}
