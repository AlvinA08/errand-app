import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/delivery.css";

export default function Delivery() {
  const navigate = useNavigate();

  const [item, setItem] = useState("");
  const [address, setAddress] = useState("");

  const handleNext = () => {
    navigate("/delivery/review", {
      state: {
        item,
        address,
      },
    });
  };

  return (
    <div className="service-container">
      {/* Header */}
      <header className="service-header">
        <h2>Errand Boy</h2>
      </header>

      {/* Content */}
      <main className="service-content">
        <h3 className="service-title">Delivery Details</h3>

        <label className="service-label">Item to be delivered</label>
        <textarea
          className="service-input"
          placeholder="Describe the item to be delivered"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />

        <label className="service-label">Delivery address</label>
        <textarea
          className="service-input"
          placeholder="Enter the delivery address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </main>

      {/* Footer */}
      <footer>
        <button
          className="next-btn"
          onClick={handleNext}
          disabled={!item || !address}
        >
          Next
        </button>
      </footer>
    </div>
  );
}
