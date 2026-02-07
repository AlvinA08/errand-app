import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/market.css";

export default function Market() {
  const navigate = useNavigate();
  const [selectedStore, setSelectedStore] = useState(null);

  const stores = [
    { id: 1, name: "Fresh Mart Market" },
    { id: 2, name: "Go Digital Market" },
    { id: 3, name: "Citi Market" }
  ];

  const handleNext = () => {
    if (!selectedStore) return;
    navigate("/market/list", { state: { store: selectedStore } });
  };

  return (
    <>
      <header className="market-header">
        <h2>Errand Boy</h2>
      </header>

      <div className="market-content">
        <h3 className="market-title">Market</h3>
        <p className="subtitle">Choose a store</p>
        <input type="text" placeholder="Search" className="search-input" />

        <div className="store-list">
          {stores.map((store) => (
            <div
              key={store.id}
              className={`store-item ${selectedStore?.id === store.id ? "active" : ""}`}
              onClick={() => setSelectedStore(store)}
            >
              {store.name}
            </div>
          ))}
        </div>
      </div>

      <button className="next-btn" disabled={!selectedStore} onClick={handleNext}>
        Next
      </button>
    </>
  );
}
