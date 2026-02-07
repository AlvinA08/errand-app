import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/market.css";

export default function MarketList() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const store = state?.store;
  const [items, setItems] = useState("");

  return (
    <>
      <header className="market-header">
        <h2>Estate Errands</h2>
      </header>

      <div className="market-content">
        <h3 className="market-title">Shopping List</h3>

        <textarea
          className="list-input"
          placeholder="One item per line"
          value={items}
          onChange={(e) => setItems(e.target.value)}
        />

        <button
          className="next-btn"
          onClick={() =>
            navigate("/market/review", {
              state: { store, items: items.split("\n") }
            })
          }
        >
          Next
        </button>
      </div>
    </>
  );
}
