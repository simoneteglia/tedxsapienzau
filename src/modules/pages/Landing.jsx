

import React, { useState, useLayoutEffect, useEffect } from "react"; // 1. Aggiunto useEffect
import { useOutletContext } from "react-router-dom";

import backgroundVideo from "../../assets/videos/tedx.mp4";
import global from "../../resources/global.json";

import Volunteers from "../../assets/images/general/volunteers.webp";

export default function Landing() {
  const [windowSize] = useOutletContext();
  
  // 2. NUOVO: Stato per la visibilità della cookie box
  const [showCookieBox, setShowCookieBox] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 3. NUOVO: Controllo al caricamento se l'utente ha già accettato
  useEffect(() => {
    const consent = localStorage.getItem("tedx_cookie_consent");
    if (!consent) {
      setShowCookieBox(true);
    }
  }, []);

  // 4. NUOVO: Funzione per salvare il consenso
  const acceptCookies = () => {
    localStorage.setItem("tedx_cookie_consent", "true");
    setShowCookieBox(false);
  };

  return (
    <div className="bg-black">
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          marginTop: global.UTILS.NAV_HEIGHT,
          width: "100vw",
          backgroundColor: "#000",
          padding:
            windowSize < global.UTILS.BIG_TABLET_WIDTH
              ? "34px 34px 0px 34px"
              : "34px",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          id="main-container"
          className="w-screen h-full"
          style={{
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Volunteers})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            position: "relative",
          }}
        >
          {windowSize > global.UTILS.TABLET_WIDTH ? (
            <video
              autoPlay
              muted
              loop
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                objectPosition: "center",
                objectFit: "cover",
                borderRadius: global.UTILS.BENTO_BOX_PADDING,
              }}
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          ) : (
            <></>
          )}
          <div
            id="video-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))",
            }}
          ></div>
          <div
            style={{
              color: "white",
              zIndex: 0,
              display: "flex",
              alignItems: "flex-end",
              gap: "20px",
            }}
          >
            <h2
              className="mb-10 text-gray-400"
              style={{
                fontSize:
                  windowSize > global.UTILS.TABLET_WIDTH ? "2vw" : "0.5vw",
                visibility:
                  windowSize > global.UTILS.TABLET_WIDTH
                    ? "initial"
                    : " hidden",
              }}
            >
              TEDXSAPIENZAU
            </h2>
            <h1
              style={{
                textAlign: "center",
                fontSize:
                  windowSize > 1245
                    ? "14vh"
                    : windowSize > global.UTILS.MOBILE_WIDTH
                    ? "100px"
                    : "50px",
                fontWeight: 700,
                maxWidth: "13ch",
              }}
            >
              LET'S EXPLORE HOW IT WAS
            </h1>
            <h2
              className="mb-10 text-gray-400"
              style={{
                fontSize: "2vw",
                visibility:
                  windowSize > global.UTILS.TABLET_WIDTH
                    ? "initial"
                    : " hidden",
              }}
            >
              PARA DOXA 2025
            </h2>
          </div>
        </div>
      </section>

      {/* 5. NUOVO: Blocco visuale Cookie Box */}
      {showCookieBox && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            maxWidth: "600px",
            backgroundColor: "rgba(20, 20, 20, 0.95)",
            backdropFilter: "blur(10px)",
            border: "1px solid #333",
            borderRadius: "12px",
            padding: "20px",
            zIndex: 9999,
            display: "flex",
            flexDirection: windowSize > global.UTILS.MOBILE_WIDTH ? "row" : "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          <p style={{ color: "#fff", fontSize: "0.9rem", margin: 0, fontFamily: "sans-serif" }}>
            Questo sito utilizza i cookie per migliorare l'esperienza utente.
          </p>
          <button
            onClick={acceptCookies}
            style={{
              backgroundColor: "#eb0028", // Rosso TEDx standard
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              fontFamily: "sans-serif"
            }}
          >
            Accetta
          </button>
        </div>
      )}
    </div>
  );
}