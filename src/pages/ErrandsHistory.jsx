import { useContext } from "react";
import { AppContext } from "../context/ErrandContext";

export default function ErrandsHistory() {
  const { errands } = useContext(AppContext);

  return (
    <div>
      <h2>Errands History</h2>

      {errands.length === 0 && <p>No errands yet</p>}

      {errands.map((e, i) => (
        <div key={i}>
          <strong>{e.type}</strong>
          <p>{e.details}</p>
          <small>{e.date} • {e.status}</small>
        </div>
      ))}
    </div>
  );
}
