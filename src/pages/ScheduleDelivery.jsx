// pages/ScheduleDelivery.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/market.css";
import SidebarLayout from "../components/SidebarLayout";

export default function ScheduleDelivery() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [urgent, setUrgent] = useState(false);

  const handleNext = () => {
    if (!date || !time) {
      alert("Please select date and time.");
      return;
    }
    navigate("/delivery-address", {
      state: { ...state, deliveryDate: date, deliveryTime: time, urgent }
    });
  };

  return (
    <SidebarLayout>
      <header className="market-header">
        <h2>Schedule Delivery</h2>
      </header>

      <div className="market-content">
        <label>Date</label>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />

        <label>Time</label>
        <input type="time" value={time} onChange={e => setTime(e.target.value)} />

        <label className="urgent-box">
          <input
            type="checkbox"
            checked={urgent}
            onChange={e => setUrgent(e.target.checked)}
          />
          Urgent delivery (extra charge)
        </label>
      </div>

      <button className="next-btn" onClick={handleNext}>
        Next
      </button>
    </SidebarLayout>
  );
}
