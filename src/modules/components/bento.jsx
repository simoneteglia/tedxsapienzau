import React from "react";

// --- STILE LIQUID GLASS (Solo la scatola) ---
const glassStyle = {
  background: "rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(12px) saturate(180%)",
  WebkitBackdropFilter: "blur(12px) saturate(180%)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  borderRadius: "20px",
  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  transition: "transform 0.3s ease, border-color 0.3s ease",
};

export default function Bento({ children, style, onMouseOver, onMouseOut }) {
  return (
    <div
      style={{ ...glassStyle, ...style }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {/* Qui dentro verrà caricato dinamicamente quello che inserisci dalla Landing */}
      {children} 
    </div>
  );
}