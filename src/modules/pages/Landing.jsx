import React, { useLayoutEffect } from "react"; // Rimossi useState e useEffect
import { useOutletContext } from "react-router-dom";

import backgroundVideo from "../../assets/videos/tedx.mp4";
import global from "../../resources/global.json";
import Volunteers from "../../assets/images/general/volunteers.webp";

// Importiamo il nuovo componente (aggiorna il percorso se necessario)
import CookieBox from "../components/CookieBox";

export default function Landing() {
  const [windowSize] = useOutletContext();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          padding: windowSize < global.UTILS.BIG_TABLET_WIDTH ? "34px 34px 0px 34px" : "34px",
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
          ) : ( <></> )}
          
          <div id="video-overlay" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))" }}></div>
          
          <div style={{ color: "white", zIndex: 0, display: "flex", alignItems: "flex-end", gap: "20px" }}>
            <h2 className="mb-10 text-gray-400" style={{ fontSize: windowSize > global.UTILS.TABLET_WIDTH ? "2vw" : "0.5vw", visibility: windowSize > global.UTILS.TABLET_WIDTH ? "initial" : " hidden" }}>
              TEDXSAPIENZAU
            </h2>
            <h1 style={{ textAlign: "center", fontSize: windowSize > 1245 ? "14vh" : windowSize > global.UTILS.MOBILE_WIDTH ? "100px" : "50px", fontWeight: 700, maxWidth: "13ch" }}>
              LET'S EXPLORE HOW IT WAS
            </h1>
            <h2 className="mb-10 text-gray-400" style={{ fontSize: "2vw", visibility: windowSize > global.UTILS.TABLET_WIDTH ? "initial" : " hidden" }}>
              PARA DOXA 2025
            </h2>
          </div>
        </div>
      </section>

      {/* Qui inseriamo la Cookie Box che ora vive di vita propria */}
      <CookieBox />
      
    </div>
  );
}