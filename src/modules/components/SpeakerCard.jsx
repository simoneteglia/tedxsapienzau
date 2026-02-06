import React from "react";
import "../../index.css";
import global from "../../resources/global.json";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

export default function SpeakerCard({
  nomeSpeaker,
  imgSrc,
  linkTalk,
  bio,
  bioeng,
  tag,
  fotoSidebar,
  setIsBioOpen,
  setSelectedSpeakerInfo,
  year,
  style,
  showName = true,
  ruoloSpeaker,
  link,
  showLinkTalk,
}) {
  const { i18n } = useTranslation();

  // Build image path (keeps your old behavior)
  const resolvedImgSrc = (() => {
    if (!imgSrc) return "";
    // If it's already an absolute path or URL, use as-is
    if (imgSrc.startsWith("http") || imgSrc.startsWith("/")) return imgSrc;

    // Otherwise use year-based folders like before
    if (year === 2022) return `/images/speakers22/${imgSrc}`;
    if (year === 2023) return `/images/speakers23/${imgSrc}`;

    // fallback
    return imgSrc;
  })();

  const toTitleCase = (value) =>
    (value || "")
      .toLowerCase()
      .split(" ")
      .map((word) =>
        word ? `${word[0].toUpperCase()}${word.slice(1)}` : ""
      )
      .join(" ");

  // Split name into two lines (Nome / Cognome)
  const parts = (nomeSpeaker || "").trim().split(/\s+/);
  const firstName = toTitleCase(parts[0] || "");
  const lastName = toTitleCase(parts.slice(1).join(" ") || "");

  const handleClick = () => {
    // If modal handlers exist -> open bio modal
    if (setIsBioOpen && setSelectedSpeakerInfo) {
      setIsBioOpen(true);
      setSelectedSpeakerInfo({
        nomeSpeaker,
        imgSrc: resolvedImgSrc,
        tag,
        linkTalk,
        bio: i18n.language === "it" ? bio : bioeng,
        fotoSidebar,
        bioeng,
        ruoloSpeaker,
      });
      return;
    }

    // Otherwise if link exists -> navigate
    if (link) {
      window.location.href = link;
    }
  };

  const isClickable = Boolean((setIsBioOpen && setSelectedSpeakerInfo) || link);

  return (
    <div
      className="col-xl-3 col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center"
      style={style}
    >
      <div
        className={`speaker-poster-card ${isClickable ? "is-clickable" : ""}`}
        style={{ "--poster": `url("${resolvedImgSrc}")` }}
        onClick={handleClick}
        role={isClickable ? "button" : undefined}
        tabIndex={isClickable ? 0 : undefined}
        onKeyDown={(e) => {
          if (!isClickable) return;
          if (e.key === "Enter" || e.key === " ") handleClick();
        }}
      >
        {/* Image */}
        <img
          src={resolvedImgSrc}
          className="speaker-poster-image"
          alt={nomeSpeaker}
        />

        {/* Overlay gradient */}
        <div className="speaker-poster-overlay" />

        {/* Optional label (Speaker/Artist) */}
        {ruoloSpeaker ? (
          <div className="speaker-poster-role">{ruoloSpeaker}</div>
        ) : null}

        {/* Bottom blur area (like your screenshot) */}
        <div className="speaker-poster-bottomblur" />

        {/* Name on top of blur */}
        {showName ? (
          <div className="speaker-poster-nameblock">
            <div className="speaker-poster-name-line">{firstName}</div>
            <div className="speaker-poster-name-line">{lastName || "\u00A0"}</div>
          </div>
        ) : null}


        {/* Optional YouTube link */}
        {showLinkTalk && linkTalk ? (
          <div
            className="speaker-poster-talk"
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = linkTalk;
            }}
          >
            <FontAwesomeIcon icon={faYoutube} /> Watch the talk
          </div>
        ) : null}
      </div>
    </div>
  );
}
