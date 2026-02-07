import { useLocation, useNavigate } from "react-router-dom";
import "../styles/market.css";

export default function MarketReview() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { store, items } = state || {};

  return (
    <>
      <header className="market-header">
        <h2>Estate Errands</h2>
      </header>

      <div className="market-content">
        <h3 className="market-title">Shopping List</h3>
        <p><strong>{store?.name}</strong></p>

        <ul className="review-list">
          {items?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <button
        className="next-btn"
        onClick={() => navigate("/payment", { state })}
      >
        Next
      </button>
    </>
  );
}
