import { useLocation, useNavigate } from "react-router-dom";
import "../styles/delivery-review.css";

export default function DeliveryReview() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const item = state?.item;
  const address = state?.address;

  return (
    <div className="review-container">
      {/* Header */}
      <header className="review-header">
        <h2>Errand Boy</h2>
      </header>

      {/* Content */}
      <div className="review-content">
        <h3 className="review-title">Review Delivery</h3>

        <div className="review-box">
          <p className="review-label">Item to be delivered</p>
          <div className="review-text">
            {item || "No item provided"}
          </div>
        </div>

        <div className="review-box">
          <p className="review-label">Delivery address</p>
          <div className="review-text">
            {address || "No address provided"}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="review-actions">
        <button
          className="back-btn"
          onClick={() => navigate("/delivery")}
        >
          Back
        </button>

        <button
          className="confirm-btn"
          onClick={() => alert("Delivery request submitted!")}
        >
          Confirm Request
        </button>
      </div>
    </div>
  );
}
