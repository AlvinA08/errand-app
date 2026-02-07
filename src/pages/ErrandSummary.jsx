// pages/ErrandSummary.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../styles/market.css";
import { useErrands } from "../context/ErrandContext";

export default function ErrandSummary() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { addErrand } = useErrands();

  // Save errand once summary loads
  useEffect(() => {
    if (state) {
      addErrand({
        id: Date.now(),
        type: state.type || "General Errand",
        details: state,
        status: "Pending",
        createdAt: new Date().toLocaleString(),
      });
    }
  }, [state, addErrand]);

  const handleNext = () => {
    navigate("/payment", { state });
  };

  if (!state) {
    return <p className="market-content">No errand data found.</p>;
  }

  return (
    <>
      <header className="market-header">
        <h2>Errand Summary</h2>
      </header>

      <div className="market-content">
        {state.store && (
          <p>
            <strong>Store:</strong> {state.store.name}
          </p>
        )}

        {state.items && (
          <p>
            <strong>Items:</strong> {state.items.join(", ")}
          </p>
        )}

        {state.pickupItem && (
          <p>
            <strong>Pickup Item:</strong> {state.pickupItem}
          </p>
        )}

        {state.description && (
          <p>
            <strong>Description:</strong> {state.description}
          </p>
        )}

        {state.deliveryDate && (
          <p>
            <strong>Date:</strong> {state.deliveryDate}
          </p>
        )}

        {state.deliveryTime && (
          <p>
            <strong>Time:</strong> {state.deliveryTime}
          </p>
        )}

        <p>
          <strong>Urgent:</strong> {state.urgent ? "Yes" : "No"}
        </p>

        {state.address && (
          <p>
            <strong>Address:</strong> {state.address}
          </p>
        )}
      </div>

      <button className="next-btn" onClick={handleNext}>
        Proceed to Payment
      </button>
    </>
  );
}
