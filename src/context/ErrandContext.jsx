import { createContext, useState, useEffect } from "react";

export const ErrandContext = createContext();

export function ErrandProvider({ children }) {
  const [errands, setErrands] = useState([]);

  // Load saved errands
  useEffect(() => {
    const savedErrands = JSON.parse(localStorage.getItem("errands"));
    if (savedErrands) setErrands(savedErrands);
  }, []);

  // Persist errands
  useEffect(() => {
    localStorage.setItem("errands", JSON.stringify(errands));
  }, [errands]);

  return (
    <ErrandContext.Provider value={{ errands, setErrands }}>
      {children}
    </ErrandContext.Provider>
  );
}
