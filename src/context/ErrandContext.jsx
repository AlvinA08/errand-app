// ErrandContext.jsx
import { createContext, useState, useEffect } from "react";

export const ErrandContext = createContext();

export function ErrandProvider({ children }) {
  const [user, setUser] = useState(null);
  const [errands, setErrands] = useState([]);

  // Load saved data
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const savedErrands = JSON.parse(localStorage.getItem("errands"));

    if (savedUser) setUser(savedUser);
    if (savedErrands) setErrands(savedErrands);
  }, []);

  // Persist data
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("errands", JSON.stringify(errands));
  }, [errands]);

  return (
    <ErrandContext.Provider value={{ user, setUser, errands, setErrands }}>
      {children}
    </ErrandContext.Provider>
  );
}
