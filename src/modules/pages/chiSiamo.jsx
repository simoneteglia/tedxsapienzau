import React, { useState, useEffect } from "react";
import global from "../../resources/global.json";
import { Link, useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Importa il componente Bento per lo stile del nuovo sito
import Bento from "../components/bento";

// ==========================================
// IMPORT DELLE IMMAGINI (Dalla tua nuova cartella!)
// ==========================================
import logoTED_it from "../../assets/images/chisiamo/Cosa_TED.webp";
import logoTED_en from "../../assets/images/chisiamo/whatis_TED.webp";

import logoTEDx_it from "../../assets/images/chisiamo/Cosa_TEDx.webp";
import logoTEDx_en from "../../assets/images/chisiamo/whatis_TEDX.webp";

// Usiamo il logo Sapienza già presente nel tuo progetto per la Navbar
import logoSapienza from "../../assets/logos/logo_white.png"; 

// Foto del Carousel
import slide1 from "../../assets/images/chisiamo/DSC00149.webp";
import slide2 from "../../assets/images/chisiamo/DSC04914.webp";
import slide3 from "../../assets/images/chisiamo/DSC05278.webp";
import slide4 from "../../assets/images/chisiamo/PHP07700.webp";

export default function ChiSiamo() {
  const { t, i18n } = useTranslation();
  const [windowSize] = useOutletContext();
  const language = i18n.resolvedLanguage || i18n.language || "it";

  // Scrolla in alto quando si apre la pagina
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ 
      backgroundColor: "transparent", 
      minHeight: "100vh", 
      paddingTop: `calc(${global.UTILS.NAV_HEIGHT} + 40px)`, 
      paddingBottom: "80px",
      color: "#fff"
    }}>
      <div className="container-lg marketing" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        
        {/* Intestazione Pagina */}
        <header style={{ textAlign: "center", marginBottom: "60px" }}>
          <p style={{ 
            color: "#ff93a4", 
            fontFamily: "Anton", 
            letterSpacing: "0.18em", 
            textTransform: "uppercase", 
            fontSize: "14px", 
            marginBottom: "8px" 
          }}>
            {t("navbar.mission_and_vision")}
          </p>
          <h1 style={{ 
            fontFamily: "GothamBold", 
            fontSize: "clamp(40px, 8vw, 72px)", 
            textTransform: "uppercase", 
            lineHeight: "0.9",
            margin: "0"
          }}>
            {t("sapienzau.chi_siamo")}
          </h1>
        </header>

        {/* Sezione TED */}
        <Bento style={{ marginBottom: "30px", padding: "40px" }}>
          <div className="row align-items-center w-100">
            <div className="col-md-5 d-flex justify-content-center mb-4 mb-md-0">
              <img
                // Uso le variabili importate in base alla lingua
                src={language.startsWith("en") ? logoTED_en : logoTED_it}
                alt="TED Logo"
                height="50"
                loading="lazy"
              />
            </div>
            <div className="col-md-7">
              <p style={{ 
                fontFamily: "GothamBook", 
                fontSize: "17px", 
                lineHeight: "1.7", 
                textAlign: "justify",
                margin: 0 
              }}>
                {t("mission.ted")}
              </p>
            </div>
          </div>
        </Bento>

        {/* Sezione TEDx */}
        <Bento style={{ marginBottom: "30px", padding: "40px" }}>
          <div className="row align-items-center w-100">
            <div className="col-md-5 d-flex justify-content-center mb-4 mb-md-0">
              <img
                src={language.startsWith("en") ? logoTEDx_en : logoTEDx_it}
                alt="TEDx Logo"
                height="50"
                loading="lazy"
              />
            </div>
            <div className="col-md-7">
              <p style={{ 
                fontFamily: "GothamBook", 
                fontSize: "17px", 
                lineHeight: "1.7", 
                textAlign: "justify",
                margin: 0 
              }}>
                {t("mission.tedx")}
              </p>
            </div>
          </div>
        </Bento>

        {/* Sezione TEDxSapienzaU */}
        <Bento style={{ marginBottom: "50px", padding: "40px" }}>
          <div className="row align-items-center w-100">
            <div className="col-md-5 d-flex justify-content-center mb-4 mb-md-0">
              <img
                src={logoSapienza}
                alt="TEDxSapienzaU Logo"
                height="75"
                loading="lazy"
              />
            </div>
            <div className="col-md-7">
              <p style={{ 
                fontFamily: "GothamBook", 
                fontSize: "17px", 
                lineHeight: "1.7", 
                textAlign: "justify" 
              }}>
                {t("mission.tedxsapienzau1")}
                <strong style={{ fontFamily: "GothamBold" }}> {t("mission.sapienzau")} </strong>
                {t("mission.tedxsapienzau2")}
              </p>
              
              <div style={{ display: "flex", justifyContent: windowSize > 768 ? "flex-start" : "center", marginTop: "24px" }}>
                <Link to="/partners" style={{ textDecoration: "none" }}>
                  <button style={{
                    background: "linear-gradient(135deg, #eb0028, #ff4f6c)",
                    padding: "14px 36px",
                    color: "white",
                    border: "none",
                    borderRadius: "50px",
                    fontFamily: "GothamBold",
                    fontSize: "15px",
                    boxShadow: "0 10px 30px rgba(235, 0, 40, 0.3)",
                    cursor: "pointer",
                    transition: "transform 0.2s ease"
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                  >
                    {t("mission.button")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Bento>

        {/* Carousel Custom Senza Bootstrap */}
        <div style={{ width: windowSize > 768 ? "80%" : "100%", margin: "0 auto" }}>
          <CustomCarousel />
        </div>
      </div>
    </div>
  );
}

// CAROUSEL NATIVO REACT 
const CustomCarousel = () => {
  const [index, setIndex] = useState(0);

  // Array delle immagini importate
  const carouselImages = [slide1, slide2, slide3, slide4];

  // Cambia immagine ogni 4 secondi
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
      <img
        src={carouselImages[index]}
        alt={`Slide ${index + 1}`}
        style={{ 
          width: "100%", 
          height: "auto", 
          objectFit: "cover", 
          display: "block",
          aspectRatio: "16/9",
        }}
        loading="lazy"
      />
      
      {/* Pallini di navigazione */}
      <div style={{ position: "absolute", bottom: "15px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "10px" }}>
        {carouselImages.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: i === index ? "#eb0028" : "rgba(255, 255, 255, 0.5)",
              cursor: "pointer",
              transition: "background-color 0.3s"
            }}
          />
        ))}
      </div>
    </div>
  );
};
