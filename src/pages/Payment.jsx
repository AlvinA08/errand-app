import "../styles/market.css";

export default function Payment() {
  return (
    <>
      <header className="market-header">
        <h2>Payment</h2>
      </header>

      <div className="market-content">
        <p>Review complete. Ready to match an Errand Boy.</p>
        <button
          className="next-btn"
          onClick={() =>
            alert("Payment authorized! Matching you with an Errand Boy ")
          }
        >
          Match your Errand Boy
        </button>
      </div>
    </>
  );
}
