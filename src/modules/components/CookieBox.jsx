// src/components/CookieBox.jsx
import React, { useState, useEffect } from "react";

export default function CookieBox() {
  const [showCookieBox, setShowCookieBox] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Gestione resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Controllo esistenza cookie
  useEffect(() => {
    const consent = localStorage.getItem("tedx_cookie_consent");
    if (!consent) {
      setShowCookieBox(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("tedx_cookie_consent", "true");
    setShowCookieBox(false);
  };

  if (!showCookieBox) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: "600px",
        // STILE LIQUID GLASS
        backgroundColor: "rgba(20, 20, 20, 0.6)", // Molto trasparente
        backdropFilter: "blur(15px) saturate(180%)", // Sfocatura potente
        WebkitBackdropFilter: "blur(15px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.1)", // Bordo sottile vetro
        borderRadius: "16px",
        padding: "24px",
        zIndex: 9999,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)", // Ombra profonda
      }}
    >
      <p style={{ color: "#e0e0e0", fontSize: "0.95rem", margin: 0, fontFamily: "sans-serif" }}>
        Questo sito utilizza i cookie per migliorare la tua esperienza.
      </p>
      <button
        onClick={acceptCookies}
        style={{
          backgroundColor: "#eb0028",
          color: "white",
          border: "none",
          padding: "10px 24px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          width: isMobile ? "100%" : "auto",
        }}
      >
        Accetta
      </button>
    </div>
  );
}