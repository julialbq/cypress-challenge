import { useMemo, useState, useEffect } from "react";
import { EntriesContext } from "./EntriesContext";
import { entriesStorage } from "../infrastructure/entriesStorage";

export const EntriesProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setEntries(entriesStorage.retrieve());
  }, []);

  const value = useMemo(
    () => ({
      entries,
      setEntries,
    }),
    [entries]
  );

  return (
    <EntriesContext.Provider value={value}>{children}</EntriesContext.Provider>
  );
};
