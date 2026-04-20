import { useEffect } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import global from "../../resources/global.json";
import "../pages/edizione2025style.css";

export default function BioSpeakerPopup({
  isBioOpen,
  setIsBioOpen,
  selectedSpeakerInfo,
  windowSize,
}) {
  useEffect(() => {
    if (isBioOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  });

  const hasTalk = Boolean(selectedSpeakerInfo?.linkTalk);
  const isDesktop = windowSize > global.UTILS.TABLET_WIDTH;
  const tagLabel = selectedSpeakerInfo?.tag || "Speaker";
  const bioText = selectedSpeakerInfo?.bio || "Bio in arrivo.";
  const sidebarBackground =
    "linear-gradient(180deg, rgba(24, 24, 24, 0.98) 0%, rgba(7, 7, 7, 0.99) 100%)";
  const closeTop = hasTalk ? "18px" : isDesktop ? "28px" : "92px";
  const contentPaddingTop = hasTalk ? "28px" : isDesktop ? "110px" : "150px";

  return (
    <div>
      <div
        id="overlay"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.58)",
          position: "fixed",
          top: 0,
          left: 0,
          opacity: isBioOpen ? 1 : 0,
          pointerEvents: isBioOpen ? "initial" : "none",
          transition: "opacity 0.35s ease-in-out",
          zIndex: 9998,
        }}
        onClick={() => setIsBioOpen(false)}
      ></div>

      <div
        style={{
          height: "100vh",
          width: isDesktop ? "min(620px, 100vw)" : "100vw",
          position: "fixed",
          top: 0,
          right: isBioOpen ? 0 : "-100%",
          opacity: isBioOpen ? 1 : 0,
          zIndex: 9999,
          background: sidebarBackground,
          transition: "right 0.35s ease-in-out, opacity 0.35s ease-in-out",
          overflowY: "auto",
          boxShadow: "-20px 0 50px rgba(0, 0, 0, 0.45)",
          borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div
          style={{
            position: "relative",
            minHeight: "100%",
            color: "#fff",
          }}
        >
          <FontAwesomeIcon
            icon={faClose}
            size="2x"
            style={{
              color: "#fff",
              position: "absolute",
              right: "20px",
              top: closeTop,
              cursor: "pointer",
              zIndex: 2,
            }}
            onClick={() => setIsBioOpen(false)}
          />

          {hasTalk ? (
            <iframe
              width="100%"
              height={isDesktop ? "360" : "240"}
              src={selectedSpeakerInfo.linkTalk}
              title="YouTube video player"
              style={{
                display: "block",
                border: 0,
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : null}

          <div
            style={{
              width: "min(92%, 540px)",
              margin: "0 auto",
              paddingTop: contentPaddingTop,
              paddingBottom: "40px",
              fontFamily: "ObjectSansHeavy",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: "34px",
                padding: "0 14px",
                borderRadius: "999px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "#f3f3f3",
                fontSize: "13px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              {tagLabel}
            </div>

            <h1
              style={{
                margin: 0,
                fontFamily: "ObjectSansHeavy",
                fontSize: isDesktop ? "42px" : "34px",
                lineHeight: 0.95,
              }}
            >
              {selectedSpeakerInfo?.nomeSpeaker}
            </h1>

            <p
              style={{
                marginTop: "22px",
                marginBottom: 0,
                fontSize: "15px",
                lineHeight: 1.7,
                fontFamily: "ObjectSans",
                color: "rgba(255, 255, 255, 0.86)",
                textAlign: "justify",
              }}
            >
              {bioText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
