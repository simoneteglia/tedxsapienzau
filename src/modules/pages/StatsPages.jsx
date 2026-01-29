//per vedere questa pagine di bozza aggiungi /stats alla url di localhost quando sta runnando il sito

import React, { useState, useEffect } from "react";
// IMPORTA L'IMMAGINE DI SFONDO 
import BackgroundImage from "../../assets/images/general/volunteers.webp"; 

// COMPONENTE PER L'ANIMAZIONE DEI NUMERI 
const AnimatedNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = (duration / end) * 1000; 
    let timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

// STILE LIQUID GLASS 
const glassStyle = {

  background: "rgba(0, 0, 0, 0.4)", // Nero semitrasparente 
  backdropFilter: "blur(12px) saturate(180%)", // Sfocatura
  WebkitBackdropFilter: "blur(12px) saturate(180%)",
  border: "1px solid rgba(255, 255, 255, 0.15)", // Bordo bianco sottile
  borderRadius: "20px",
  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  transition: "transform 0.3s ease, border-color 0.3s ease",
};

export default function StatsPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // 1. AGGIUNTO SFONDO QUI
    <div 
      className="bg-black" 
      style={{ 
        minHeight: "100vh", 
        
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Effetto parallasse carino
        color: "white", 
        padding: "50px 20px",
        position: "relative"
      }}
    >
      {//OVERLAY SCURO 
        //  Serve a scurire l'immagine di sfondo per far leggere meglio i testi bianchi */
      }
      <div style={{
        position: "absolute",
        top: 0, left: 0, width: "100%", height: "100%",
        backgroundColor: "rgba(0,0,0,0.7)", // Scurisce l'immagine del 70%
        zIndex: 0
      }}></div>

      {/* Contenuto (con zIndex per stare sopra l'overlay) */}
      <div style={{ position: "relative", zIndex: 1 }}>
        
        <h1 style={{ 
          textAlign: "center", 
          fontSize: isMobile ? "3rem" : "5rem", 
          fontFamily: "Fira Sans Extra Condensed, sans-serif", 
          fontWeight: 800, 
          marginBottom: "50px",
          textTransform: "uppercase",
          textShadow: "0 4px 10px rgba(0,0,0,0.5)" // Ombra al testo
        }}>
          How It Was
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr 1fr", 
            gridTemplateRows: isMobile ? "auto" : "repeat(2, 1fr)",
            gap: "24px",
            maxWidth: "1200px",
            margin: "0 auto",
            fontFamily: "sans-serif"
          }}
        >
          
          {/* BOX TESTO */}
          <div
            style={{
              ...glassStyle,
              gridRow: isMobile ? "span 1" : "span 2", 
              alignItems: "flex-start",
              textAlign: "left",
              padding: "40px",
              background: "rgba(20, 20, 20, 0.6)" // Leggermente più scuro
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.borderColor = "rgba(235, 0, 40, 0.8)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
            }}
          >
            <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", lineHeight: "1.4", marginBottom: "30px" }}>
              TEDxSapienzaU è il TEDx Universitario dell'Ateneo Sapienza Università di Roma
            </h2>
            <button
              style={{
                backgroundColor: "#eb0028",
                color: "white",
                border: "none",
                padding: "15px 35px",
                borderRadius: "50px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "transform 0.2s",
                boxShadow: "0 4px 15px rgba(235, 0, 40, 0.4)"
              }}
              onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
              onMouseOut={(e) => e.target.style.transform = "scale(1)"}
            >
              Scopri di più
            </button>
          </div>

          {/* BOX STATISTICHE (usano glassStyle di default) */}
          <div style={glassStyle}>
            <div style={{ color: "#eb0028", fontSize: "3.5rem", fontWeight: "800", marginBottom: "10px" }}>
              <AnimatedNumber end={41} duration={1500} />
            </div>
            <div style={{ fontSize: "1.2rem", fontWeight: "500", color: "#ccc" }}>speakers</div>
          </div>

          <div style={glassStyle}>
            <div style={{ color: "#eb0028", fontSize: "3.5rem", fontWeight: "800", marginBottom: "10px" }}>
              <AnimatedNumber end={4000} duration={2000} />
            </div>
            <div style={{ fontSize: "1.2rem", fontWeight: "500", color: "#ccc" }}>spettatori</div>
          </div>

          <div style={glassStyle}>
            <div style={{ color: "#eb0028", fontSize: "3.5rem", fontWeight: "800", marginBottom: "10px" }}>
              <AnimatedNumber end={9000} duration={2000} />
            </div>
            <div style={{ fontSize: "1.2rem", fontWeight: "500", color: "#ccc" }}>followers</div>
          </div>

          <div style={glassStyle}>
            <div style={{ color: "#eb0028", fontSize: "3.5rem", fontWeight: "800", marginBottom: "10px" }}>
              <AnimatedNumber end={35000} duration={2500} />
            </div>
            <div style={{ fontSize: "1.2rem", fontWeight: "500", color: "#ccc", textAlign: "center" }}>
              visualizzazioni su YouTube
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}