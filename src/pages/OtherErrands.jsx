import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/otherErrands.css";

export default function OtherErrands() {
  const navigate = useNavigate();
  const [errand, setErrand] = useState("");

  return (
    <div className="other-errands">
      <h2>Other Errands</h2>

      <textarea
        placeholder="Describe your errand"
        value={errand}
        onChange={(e) => setErrand(e.target.value)}
      />

      <button
        disabled={!errand}
        onClick={() => navigate("/errand-summary", { state: { errand } })}
      >
        Continue
      </button>
    </div>
  );
}
