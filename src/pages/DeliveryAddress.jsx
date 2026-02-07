// pages/DeliveryAddress.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/market.css";
import SidebarLayout from "../components/SidebarLayout";

export default function DeliveryAddress() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [address, setAddress] = useState("");

  const handleNext = () => {
    if (!address) {
      alert("Please enter your delivery address.");
      return;
    }
    navigate("/errand-summary", { state: { ...state, address } });
  };

  return (
    <SidebarLayout>
      <header className="market-header">
        <h2>Delivery Address</h2>
      </header>

      <div className="market-content">
        <label>Address</label>
        <textarea
          placeholder="Enter delivery address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </div>

      <button className="next-btn" onClick={handleNext}>
        Next
      </button>
    </SidebarLayout>
  );
}
