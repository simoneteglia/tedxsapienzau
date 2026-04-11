import React, { useLayoutEffect, useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import backgroundVideo from "../../assets/videos/tedx.mp4";
import global from "../../resources/global.json";

// Importiamo la Cookie Box e il nostro "Lego" Bento
import CookieBox from "../components/CookieBox";
import Bento from "../components/bento";

// --- COMPONENTE PER L'ANIMAZIONE DEI NUMERI (Spostato qui) ---
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

  return <span>{count.toLocaleString("it-IT")}</span>;
};

export default function Landing() {
  const [windowSize] = useOutletContext();

  const isMobile = windowSize < global.UTILS.TABLET_WIDTH;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { end: 41, label: "speakers" },
    { end: 4000, label: "spettatori" },
    { end: 9000, label: "followers" },
    { end: 35000, label: "visualizzazioni su YouTube" },
  ];

  return (
    <div className="text-white" style={{ backgroundColor: "transparent" }}>
      {/* HERO SECTION ORIGINALE */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          marginTop: global.UTILS.NAV_HEIGHT,
          width: "100%",
          maxWidth: "100%",
          // padding:
          //   windowSize < global.UTILS.BIG_TABLET_WIDTH
          //     ? "34px 34px 0px 34px"
          //     : "34px",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          id="main-container"
          className="w-full h-full"
          style={{
            padding: global.UTILS.BENTO_BOX_PADDING,
            // borderRadius: global.UTILS.BENTO_BOX_PADDING,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            fontFamily: "ObjectSansHeavy",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
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
                // borderRadius: global.UTILS.BENTO_BOX_PADDING,
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
              className="text-white"
              style={{
                fontSize:
                  windowSize > global.UTILS.TABLET_WIDTH ? "2vw" : "0.5vw",
                visibility:
                  windowSize > global.UTILS.TABLET_WIDTH
                    ? "initial"
                    : " hidden",
                transform: "translateY(6px)",
              }}
            >
              TEDXSAPIENZAU
            </h2>
            <h1
              style={{
                textAlign: "center",
                fontSize:
                  windowSize > 1245
                    ? "10vh"
                    : windowSize > global.UTILS.MOBILE_WIDTH
                      ? "80px"
                      : "50px",
                fontWeight: 700,
                maxWidth: "13ch",
                lineHeight: 1.02,
              }}
            >
              LET'S EXPLORE HOW IT WAS
            </h1>
            <h2
              className="text-white"
              style={{
                fontSize: "2vw",
                visibility:
                  windowSize > global.UTILS.TABLET_WIDTH
                    ? "initial"
                    : " hidden",
                transform: "translateY(6px)",
              }}
            >
              PARA DOXA 2025
            </h2>
          </div>
        </div>
      </section>

      {/* NUOVA SEZIONE STATISTICHE CON BENTO BOX E SFONDO */}
      <section className="w-full relative py-24">
        {/* CONTENITORE GRIGLIA */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr 1fr",
              gridTemplateRows: isMobile ? "auto" : "repeat(2, 1fr)",
              gap: "24px",
              fontFamily: "'Object Sans', sans-serif",
            }}
          >
            {/* BOX 1: TESTO GRANDE (Usando il componente Bento) */}
            <Bento
              style={{
                gridRow: isMobile ? "span 1" : "span 2",
                alignItems: "flex-start",
                textAlign: "left",
                padding: "40px",
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
              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  lineHeight: "1.4",
                  marginBottom: "30px",
                  color: "white",
                }}
              >
                TEDxSapienzaU è il TEDx Universitario dell'Ateneo Sapienza
                Università di Roma
              </h3>
              <a
                href="#"
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
                  boxShadow: "0 4px 15px rgba(235, 0, 40, 0.4)",
                  textDecoration: "none",
                  display: "inline-block",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              >
                Scopri di più
              </a>
            </Bento>

            {/* BOX 2-5: STATISTICHE DINAMICHE (Usando il componente Bento) */}
            {stats.map((stat, index) => (
              <Bento key={index}>
                <div
                  style={{
                    color: "white",
                    fontSize: "3.5rem",
                    fontWeight: "800",
                    marginBottom: "10px",
                  }}
                >
                  <AnimatedNumber end={stat.end} duration={2000} />
                </div>
                <div
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    color: "#ccc",
                    textAlign: "center",
                  }}
                >
                  {stat.label}
                </div>
              </Bento>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Box  */}
      <CookieBox />
    </div>
  );
}
