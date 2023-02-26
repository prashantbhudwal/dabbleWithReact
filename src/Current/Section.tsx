import { LevelContext } from "./LevelContext";
import { useContext } from "react";
export default function Section({ children }) {
    // Consumes the context provided by default value in the create context 
     const level = useContext(LevelContext);
  return (
    <section className="section">
    {/* Provides new context to the children components */}
      <LevelContext.Provider value={level + 1}>{children}</LevelContext.Provider>
    </section>
  );
}
